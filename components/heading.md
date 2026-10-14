# Heading

> تیتر — با جدایی «سطح معنایی» از «اندازه‌ی ظاهری».

## دمو

زنده در Storybook: `Typography/Heading`.

## API

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `as` | `h1`…`h6` | `h2` | سطح معنایی (سئو/ساختار) |
| `size` | `display` \| `h1` \| `h2` | `h2` | اندازه‌ی بصری — مستقل از as |
| `weight` | `medium` \| `bold` | `bold` | وزن |
| `tone` | `default` \| `muted` \| `primary` | `default` | رنگ |

## نکات استفاده

- ✅ تیتر صفحه (`as="h1" size="display"`)، تیتر بخش، زیرتیتر
- الگوی درست سئو: در هر صفحه فقط یک `h1`؛ بصری هرچه لازم است
- `text-balance` خودکار است (شکستن بهتر خطوط فارسی)

## توکن‌های استفاده‌شده

`font.size.display/h1/h2` · `font.weight.bold/medium` · `font.lineHeight.tight` · `color.text`
