# Textarea

> ورودی چندخطی — همان زبان بصری Input با ارتفاع خط relaxed برای متن فارسی.

## دمو

زنده در Storybook: `Forms/Textarea`.

## API

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `invalid` | `boolean` | `false` | حالت خطا — `aria-invalid` + رنگ error |
| `...props` | `TextareaHTMLAttributes` | — | همه‌ی prop های استاندارد (`rows`, `maxLength`, ...) |

## نکات استفاده

- ✅ توضیحات، یادداشت، پیام — همراه `Field`
- ارتفاع خط `relaxed` است (برای فارسی)؛ تغییر اندازه عمودی فعال
- ارتفاع اولیه: `min-h-24` — با `rows` یا className قابل کنترل

## توکن‌های استفاده‌شده

مثل Input + `font.lineHeight.relaxed`
