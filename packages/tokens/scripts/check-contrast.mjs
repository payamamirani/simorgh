/**
 * دروازه‌ی کیفیت رنگ سیمرغ — در هر بیلد اجرا می‌شود و در صورت رد شدن، بیلد fail می‌شود.
 *
 * چک‌ها:
 *  ۱. متن‌ها: ≥ 4.5:1 (WCAG AA متن عادی)
 *  ۲. مرزهای UI معنادار (border-strong / focus-ring): ≥ 3:1
 *  ۳. توکن‌های آلفا (subtle): ابتدا روی سطح ترکیب ریاضی، سپس همان آستانه‌ی متن
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const tokensDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'tokens');
const readJson = (file) => readFile(path.join(tokensDir, file), 'utf8').then(JSON.parse);
const palette = await readJson('palette.tokens.json');
const light = await readJson('themes/light.tokens.json');
const dark = await readJson('themes/dark.tokens.json');

/* ---------- حل ارجاع و خواندن توکن ---------- */

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

function pick(theme, path) {
  let node = theme.simorgh.color;
  for (const key of path) node = node[key];
  if (!node) throw new Error(`توکن پیدا نشد: ${path.join('.')}`);
  return resolve(node.$value);
}

/* ---------- HSLA → RGB → luminance (WCAG 2.x) ---------- */

function toRgba(color) {
  const m = color.match(/hsla?\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*([\d.]+))?\)/);
  if (!m) throw new Error(`فرمت رنگ پشتیبانی نمی‌شود (فقط HSLA): ${color}`);
  const h = Number(m[1]);
  const s = Number(m[2]) / 100;
  const l = Number(m[3]) / 100;
  const a = m[4] === undefined ? 1 : Number(m[4]);
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  const m2 = l - c / 2;
  let rgb;
  if (hp < 1) rgb = [c, x, 0];
  else if (hp < 2) rgb = [x, c, 0];
  else if (hp < 3) rgb = [0, c, x];
  else if (hp < 4) rgb = [0, x, c];
  else if (hp < 5) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  return [...rgb.map((v) => v + m2), a];
}

function luminanceOf([r, g, b]) {
  const lin = [r, g, b].map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function contrast(a, b) {
  const [l1, l2] = [luminanceOf(toRgba(a)), luminanceOf(toRgba(b))].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/** رنگ آلفادار روی پس‌زمینه‌ی opaque ترکیب می‌شود (فضای sRGB) */
function blendOn(fgAlpha, bg) {
  const f = toRgba(fgAlpha);
  const b = toRgba(bg);
  return luminanceOf(f.slice(0, 3).map((v, i) => v * f[3] + b[i] * (1 - f[3])));
}

function contrastOverBase(fg, subtleAlpha, base) {
  const l1 = luminanceOf(toRgba(fg));
  const l2 = blendOn(subtleAlpha, base);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/* ---------- جفت‌های حیاتی ---------- */

const TEXT = 4.5;
const UI = 3.0;

const cases = [
  ['متن اصلی روی پس‌زمینه صفحه', light, ['text', 'primary'], ['background'], TEXT],
  ['متن اصلی روی سطح', light, ['text', 'primary'], ['surface'], TEXT],
  ['متن اصلی روی سطح برجسته', light, ['text', 'primary'], ['surface-raised'], TEXT],
  ['متن ثانویه روی سطح', light, ['text', 'secondary'], ['surface'], TEXT],
  ['متن خاموش روی سطح', light, ['text', 'muted'], ['surface'], TEXT],
  ['متن روی primary (دکمه)', light, ['on-primary'], ['primary'], TEXT],
  ['متن روی secondary', light, ['on-secondary'], ['secondary'], TEXT],
  ['primary به‌عنوان متن/آیکون', light, ['primary'], ['surface'], TEXT],
  ['لینک روی سطح', light, ['link'], ['surface'], TEXT],
  ['لینک hover روی سطح', light, ['link-hover'], ['surface'], TEXT],
  ['success روی سطح', light, ['success'], ['surface'], TEXT],
  ['warning روی سطح', light, ['warning'], ['surface'], TEXT],
  ['error روی سطح', light, ['error'], ['surface'], TEXT],
  ['info روی سطح', light, ['info'], ['surface'], TEXT],
  ['ai روی سطح', light, ['ai'], ['surface'], TEXT],
  ['متن روی success solid', light, ['on-success'], ['success'], TEXT],
  ['متن روی warning solid', light, ['on-warning'], ['warning'], TEXT],
  ['متن روی error solid', light, ['on-error'], ['error'], TEXT],
  ['متن روی info solid', light, ['on-info'], ['info'], TEXT],
  ['متن روی ai solid', light, ['on-ai'], ['ai'], TEXT],

  ['متن اصلی روی پس‌زمینه صفحه', dark, ['text', 'primary'], ['background'], TEXT],
  ['متن اصلی روی سطح', dark, ['text', 'primary'], ['surface'], TEXT],
  ['متن اصلی روی سطح برجسته', dark, ['text', 'primary'], ['surface-raised'], TEXT],
  ['متن ثانویه روی سطح', dark, ['text', 'secondary'], ['surface'], TEXT],
  ['متن خاموش روی سطح', dark, ['text', 'muted'], ['surface'], TEXT],
  ['متن روی primary (دکمه)', dark, ['on-primary'], ['primary'], TEXT],
  ['متن روی secondary', dark, ['on-secondary'], ['secondary'], TEXT],
  ['primary به‌عنوان متن/آیکون', dark, ['primary'], ['background'], TEXT],
  ['لینک روی سطح', dark, ['link'], ['background'], TEXT],
  ['لینک hover روی سطح', dark, ['link-hover'], ['background'], TEXT],
  ['success روی سطح', dark, ['success'], ['background'], TEXT],
  ['warning روی سطح', dark, ['warning'], ['background'], TEXT],
  ['error روی سطح', dark, ['error'], ['background'], TEXT],
  ['info روی سطح', dark, ['info'], ['background'], TEXT],
  ['ai روی سطح', dark, ['ai'], ['background'], TEXT],
  ['متن روی success solid', dark, ['on-success'], ['success'], TEXT],
  ['متن روی warning solid', dark, ['on-warning'], ['warning'], TEXT],
  ['متن روی error solid', dark, ['on-error'], ['error'], TEXT],
  ['متن روی info solid', dark, ['on-info'], ['info'], TEXT],
  ['متن روی ai solid', dark, ['on-ai'], ['ai'], TEXT],

  // مرزهای UI معنادار
  ['مرز قوی روی سطح (UI)', light, ['border-strong'], ['surface'], UI],
  ['مرز فوکس روی سطح (UI)', light, ['border-focus'], ['surface'], UI],
  ['مرز قوی روی سطح (UI)', dark, ['border-strong'], ['surface'], UI],
  ['مرز فوکس روی سطح (UI)', dark, ['border-focus'], ['surface'], UI],
];

// رنگ وضعیت روی زمینه‌ی subtle خودش (subtle روی سطح ترکیب می‌شود)
const subtleCases = [
  ['primary روی primary-subtle', light, ['primary'], ['primary-subtle'], 'surface'],
  ['success روی success-subtle', light, ['success'], ['success-subtle'], 'surface'],
  ['warning روی warning-subtle', light, ['warning'], ['warning-subtle'], 'surface'],
  ['error روی error-subtle', light, ['error'], ['error-subtle'], 'surface'],
  ['info روی info-subtle', light, ['info'], ['info-subtle'], 'surface'],
  ['ai روی ai-subtle', light, ['ai'], ['ai-subtle'], 'surface'],
  ['primary روی primary-subtle', dark, ['primary'], ['primary-subtle'], 'surface'],
  ['success روی success-subtle', dark, ['success'], ['success-subtle'], 'surface'],
  ['warning روی warning-subtle', dark, ['warning'], ['warning-subtle'], 'surface'],
  ['error روی error-subtle', dark, ['error'], ['error-subtle'], 'surface'],
  ['info روی info-subtle', dark, ['info'], ['info-subtle'], 'surface'],
  ['ai روی ai-subtle', dark, ['ai'], ['ai-subtle'], 'surface'],
];

let failed = 0;
let passed = 0;
const log = (ok, theme, label, ratio, min) => {
  console.log(
    `${ok ? '✓' : '✗'} [${theme === light ? 'روشن' : 'تیره'}] ${label} → ${ratio.toFixed(2)}:1 (حداقل ${min})`,
  );
};

for (const [label, theme, fg, bg, min] of cases) {
  const ratio = contrast(pick(theme, fg), pick(theme, bg));
  const ok = ratio >= min;
  ok ? passed++ : failed++;
  log(ok, theme, label, ratio, min);
}

for (const [label, theme, fg, subtle, baseKey] of subtleCases) {
  const ratio = contrastOverBase(pick(theme, fg), pick(theme, subtle), pick(theme, [baseKey]));
  const ok = ratio >= TEXT;
  ok ? passed++ : failed++;
  log(ok, theme, label, ratio, TEXT);
}

if (failed > 0) {
  console.error(`\n✗ ${failed} جفت کنتراست رد شد — قبل از ادامه، توکن‌ها را اصلاح کن.`);
  process.exit(1);
}
console.log(`\n✓ همه‌ی ${passed} جفت کنتراست، استانداردهای WCAG را پاس کردند.`);
