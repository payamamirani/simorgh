# Text

> متن — پاراگراف، توضیحات، برچسب. همه‌ی اندازه/وزن/رنگ/ارتفاع‌خط از توکن.

## دمو

زنده در Storybook: `Typography/Text`.

## API

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `as` | `p` \| `span` \| `div` \| `strong` \| `em` \| `small` \| `label` | `p` | تگ HTML |
| `size` | `body` \| `caption` | `body` | اندازه |
| `weight` | `regular` \| `medium` \| `bold` | `regular` | وزن |
| `tone` | `default` \| `muted` \| `primary` \| `success` \| `warning` \| `error` \| `info` | `default` | رنگ معنایی |
| `leading` | `normal` \| `tight` \| `relaxed` | `normal` | ارتفاع خط — فارسی: `relaxed` |

## نکات استفاده

- ✅ متن بدنه، توضیحات فرم، متن کمکی زیر Input
- ❌ تیترها → `Heading`
- برای متن فارسی طولانی `leading="relaxed"` (مطابق `foundations/typography.md`)

## توکن‌های استفاده‌شده

`font.size.body/caption` · `font.weight.*` · `font.lineHeight.*` · `color.text` / `color.text-muted` / رنگ‌های معنایی
