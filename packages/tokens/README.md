# توکن‌های سیمرغ

منبع اصلی حقیقت (Single Source of Truth) سیستم دیزاین — فرمت W3C / DTCG.

## ساختار دو لایه

| فایل | لایه | محتوا |
|---|---|---|
| `tokens/palette.tokens.json` | ۱ — پالت خام | مخزن همه‌ی رنگ‌ها (`simorgh.palette.color.*`). **هرگز** مستقیم در کامپوننت استفاده نمی‌شود. |
| `tokens/base.tokens.json` | مستقل از تم | فاصله‌ها، شعاع گوشه، فونت‌ها، سایه‌ها |
| `tokens/themes/light.tokens.json` | ۲ — نقش‌ها (تم روشن) | `primary`، `surface`، `text`، `border`، ... — کامپوننت‌ها فقط این‌ها را می‌بینند |
| `tokens/themes/dark.tokens.json` | ۲ — نقش‌ها (تم تیره) | همان نقش‌ها با مقادیر مناسب پس‌زمینه‌ی تیره |

## قواعد

1. کامپوننت‌ها فقط از توکن‌های معنایی استفاده می‌کنند (`bg-primary` ✅ / `bg-teal-700` ❌)
2. افزودن تم جدید = یک فایل جدید در `themes/` با همان نقش‌ها — هیچ کامپوننتی تغییر نمی‌کند
3. بعد از هر تغییر: `pnpm --filter @simorgh/tokens build` را اجرا کن تا خروجی‌های CSS/JS دوباره تولید شوند

## خروجی‌های بیلد (تولیدشده — commit نشده)

- `dist/css/vars.css` → همه‌چیز در `:root` (تم روشن پیش‌فرض)
- `dist/css/dark.css` → فقط نقش‌ها در `[data-theme="dark"]`
- `dist/css/palette.css` → فقط پالت خام (مصارف خاص)
- `dist/css/tailwind.css` → پل `@theme` برای Tailwind v4
- `dist/js/tokens.mjs` → آبجکت توکن‌ها برای مصرف در JS
