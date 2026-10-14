# Stack

> چیدمان عمودی/افقی با فاصله‌ی توکنی — جایگزین margin های دستی.

## دمو

زنده در Storybook: `Layout/Stack`.

## API

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `direction` | `row` \| `column` | `column` | جهت چیدمان (RTL-aware) |
| `gap` | `1`…`16` | `4` | فاصله — مستقیم به `space.*` |
| `align` | `start` \| `end` \| `center` \| `stretch` \| `baseline` | — | تراز عرضی |
| `justify` | `start` \| `end` \| `center` \| `between` \| `around` \| `evenly` | — | توزیع طولی |
| `wrap` | `boolean` | `false` | شکستن خط |
| `as` | `div` \| `ul` \| `section` \| ... | `div` | تگ معنایی |

## نکات استفاده

- ✅ فاصله‌گذاری بین هر گروهی از عناصر؛ فهرست‌ها (`as="ul"`)
- ❌ هم‌ترازی پیچیده‌ی دو‌بعدی → در آینده `Grid`
- فاصله‌ها با `gap-(--simorgh-space-N)` مستقیم از توکن می‌آیند

## توکن‌های استفاده‌شده

`space.1` … `space.16`
