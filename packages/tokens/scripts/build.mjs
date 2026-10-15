/**
 * بیلد توکن‌ها با Style Dictionary v4 (فرمت W3C / DTCG)
 *
 * خروجی‌ها:
 *   dist/css/vars.css     → پالت + پایه + تم روشن در :root
 *   dist/css/dark.css     → فقط توکن‌های معنایی در [data-theme="dark"]
 *   dist/css/palette.css  → فقط پالت خام در :root (برای مصارف خاص)
 *   dist/css/tailwind.css → پل @theme برای Tailwind v4
 *   dist/js/tokens.mjs    → خروجی JS برای مصرف در کد
 */
import StyleDictionary from 'style-dictionary';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PALETTE = 'tokens/palette.tokens.json';
const BASE = 'tokens/base.tokens.json';
const LIGHT = 'tokens/themes/light.tokens.json';
const DARK = 'tokens/themes/dark.tokens.json';

/** فقط توکن‌های معنایی رنگ (simorgh.color.*) — بدون پالت خام و توکن‌های پایه */
const isSemanticColor = (token) => token.path[0] === 'simorgh' && token.path[1] === 'color';

/* ---------- ۱) CSS Variables ---------- */

// همه‌چیز برای تم روشن → :root
const lightSD = new StyleDictionary({
  source: [PALETTE, BASE, LIGHT],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'vars.css',
          format: 'css/variables',
          options: { selector: ':root' },
        },
      ],
    },
  },
});

// تم تیره → فقط توکن‌های معنایی زیر [data-theme="dark"]
const darkSD = new StyleDictionary({
  source: [PALETTE, BASE, DARK],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables',
          options: { selector: '[data-theme="dark"]' },
          filter: isSemanticColor,
        },
      ],
    },
  },
});

// پالت خام به‌صورت جدا (برای مصارف خاص مثل نمودارها)
const paletteSD = new StyleDictionary({
  source: [PALETTE],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'palette.css',
          format: 'css/variables',
          options: { selector: ':root' },
        },
      ],
    },
  },
});

await lightSD.hasInitialized;
await lightSD.buildAllPlatforms();
await darkSD.hasInitialized;
await darkSD.buildAllPlatforms();
await paletteSD.hasInitialized;
await paletteSD.buildAllPlatforms();

/* ---------- ۲) پل Tailwind v4 (@theme) ---------- */

const readJson = (file) => readFile(file, 'utf8').then(JSON.parse);
const lightJson = await readJson(LIGHT);
const baseJson = await readJson(BASE);

/** پیمایش درخت توکن‌ها → [مسیر، مقدار] */
function* walk(obj, trail = []) {
  if (!obj || typeof obj !== 'object') return;
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;
    if (value && typeof value === 'object' && '$value' in value) {
      yield [[...trail, key], value.$value];
    } else {
      yield* walk(value, [...trail, key]);
    }
  }
}

/** نگاشت مسیر توکن به کلید تم Tailwind */
function tailwindKey(pathSegments) {
  // simorgh.color.primary       → --color-primary
  // simorgh.color.surface.raised → --color-surface-raised
  // simorgh.color.text.primary  → --color-text (استثنا: حفظ یوتیلیتی text-text)
  // simorgh.color.text.muted    → --color-text-muted
  // simorgh.radius.md           → --radius-md
  // simorgh.shadow.md           → --shadow-md
  // simorgh.font.family.fa      → --font-fa (نام‌گذاری ویژه)
  // simorgh.font.size.body      → --text-body (نام‌گذاری ویژه)
  const rest = pathSegments.slice(1);
  if (rest[0] === 'color' && rest[1] === 'text' && rest[2] === 'primary') {
    return '--color-text';
  }
  if (rest[0] === 'font' && rest[1] === 'family') return `--font-${rest[2]}`;
  if (rest[0] === 'font' && rest[1] === 'size') return `--text-${rest[2]}`;
  if (rest[0] === 'font' && rest[1] === 'weight') return `--font-weight-${rest[2]}`;
  if (rest[0] === 'font' && rest[1] === 'lineHeight') return `--leading-${rest[2]}`;
  return `--${rest.join('-')}`;
}

const themeLines = [];
for (const [p] of walk(lightJson)) {
  themeLines.push(`  ${tailwindKey(p)}: var(--${p.join('-')});`);
}
for (const [p] of walk(baseJson)) {
  if (p.includes('space')) continue; // Tailwind v4 خودش مقیاس ۴px دارد که با scale ما یکی است
  themeLines.push(`  ${tailwindKey(p)}: var(--${p.join('-')});`);
}

const themeCss = `/* ⚠️ این فایل به‌صورت خودکار توسط scripts/build.mjs تولید شده — دستی ویرایش نکنید */\n@theme {\n${themeLines.join('\n')}\n}\n`;
await mkdir('dist/css', { recursive: true });
await writeFile(path.join('dist/css', 'tailwind.css'), themeCss);

/* ---------- ۳) خروجی JS ---------- */

const flat = {};
for (const [p, v] of [...walk(lightJson), ...walk(baseJson)]) {
  flat[p.join('.')] = v;
}
const jsOut = `// ⚠️ این فایل به‌صورت خودکار توسط scripts/build.mjs تولید شده — دستی ویرایش نکنید\nexport const tokens = ${JSON.stringify(flat, null, 2)};\n`;
await mkdir('dist/js', { recursive: true });
await writeFile(path.join('dist/js', 'tokens.mjs'), jsOut);
await writeFile(
  path.join('dist/js', 'tokens.d.ts'),
  'export declare const tokens: Record<string, string | string[] | number>;\n',
);

console.log('✓ @simorgh/tokens ساخته شد: dist/css/{vars,dark,palette,tailwind}.css + dist/js/tokens.mjs');
