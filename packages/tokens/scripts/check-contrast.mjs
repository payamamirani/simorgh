/**
 * چک خودکار کنتراست WCAG برای جفت‌های حیاتی توکن‌های معنایی.
 * بخشی از بیلد است — اگر هر جفت زیر 4.5:1 برود، بیلد fail می‌شود.
 */
import { readFile } from 'node:fs/promises';

const readJson = (file) => readFile(file, 'utf8').then(JSON.parse);
const palette = await readJson('tokens/palette.tokens.json');
const light = await readJson('tokens/themes/light.tokens.json');
const dark = await readJson('tokens/themes/dark.tokens.json');

/** حل ارجاع {simorgh.palette.color.teal.700} به مقدار واقعی */
function resolve(value) {
  if (typeof value !== 'string' || !value.startsWith('{')) return value;
  const path = value.slice(1, -1).split('.');
  let node = { simorgh: palette.simorgh };
  for (const key of path) {
    node = node[key];
    if (!node) throw new Error(`ارجاع نامعتبر: ${value}`);
  }
  return resolve(node.$value);
}

/** گرفتن توکن معنایی حل‌شده از فایل تم */
function semantic(themeFile, name) {
  return resolve(themeFile.simorgh.color[name].$value);
}

/* فرمول WCAG 2.x */
function luminance(hex) {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(c.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/* جفت‌هایی که برای متن باید ≥ 4.5:1 باشند */
const pairs = [
  ['روشن', light, ['text', 'surface']],
  ['روشن', light, ['text-muted', 'surface']],
  ['روشن', light, ['text', 'surface-raised']],
  ['روشن', light, ['on-primary', 'primary']],
  ['روشن', light, ['primary', 'surface']],
  ['روشن', light, ['success', 'surface']],
  ['روشن', light, ['warning', 'surface']],
  ['روشن', light, ['danger', 'surface']],
  ['روشن', light, ['info', 'surface']],
  ['روشن', light, ['on-success', 'success']],
  ['روشن', light, ['on-warning', 'warning']],
  ['روشن', light, ['on-danger', 'danger']],
  ['روشن', light, ['on-info', 'info']],
  ['تیره', dark, ['text', 'surface']],
  ['تیره', dark, ['text-muted', 'surface']],
  ['تیره', dark, ['text', 'surface-raised']],
  ['تیره', dark, ['on-primary', 'primary']],
  ['تیره', dark, ['primary', 'surface']],
  ['تیره', dark, ['success', 'surface']],
  ['تیره', dark, ['warning', 'surface']],
  ['تیره', dark, ['danger', 'surface']],
  ['تیره', dark, ['info', 'surface']],
  ['تیره', dark, ['on-success', 'success']],
  ['تیره', dark, ['on-warning', 'warning']],
  ['تیره', dark, ['on-danger', 'danger']],
  ['تیره', dark, ['on-info', 'info']],
];

const MIN = 4.5;
let failed = 0;

for (const [themeName, theme, [fg, bg]] of pairs) {
  const ratio = contrast(semantic(theme, fg), semantic(theme, bg));
  const ok = ratio >= MIN;
  if (!ok) failed++;
  console.log(
    `${ok ? '✓' : '✗'} [${themeName}] ${fg} روی ${bg} → ${ratio.toFixed(2)}:1${ok ? '' : ` (کمتر از ${MIN}:1)`}`,
  );
}

if (failed > 0) {
  console.error(`\n✗ ${failed} جفت کنتراست رد شد — قبل از ادامه، توکن‌ها را اصلاح کن.`);
  process.exit(1);
}
console.log(`\n✓ همه‌ی ${pairs.length} جفت کنتراست، استاندارد ${MIN}:1 را پاس کردند.`);
