# Radio

> انتخاب یک گزینه از چند مورد — ناوبری فلش‌های کیبورد خودکار (Radix).

## دمو

زنده در Storybook: `Forms/Radio`.

## API

**RadioGroup** (ریشه):

| نام | نوع | توضیح |
|---|---|---|
| `invalid` | `boolean` | `aria-invalid` روی کل گروه + رنگ danger |
| `...props` | Radix RadioGroupProps | `value` / `defaultValue` / `onValueChange` / `orientation` |

**Radio** (آیتم): `value` · `label` · `description` · `disabled`

## نکات استفاده

- ✅ انتخاب یگانه تا ~۵ گزینه با متن قابل‌نمایش
- ❌ گزینه‌های بیشتر → `Select`
- ترکیب با `Field` برای لیبل/خطای گروه — استوری «در فرم»

## توکن‌های استفاده‌شده

`color.primary` / `color.border-strong` / `color.danger` · `radius.full`
