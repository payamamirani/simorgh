# Modal

> مودال — اکشن یا محتوایی که تمرکز کامل می‌خواهد. منطق کامل از Radix Dialog.

## دمو

زنده در Storybook: `Overlay/Modal`.

## API (ترکیبی)

| بخش | توضیح |
|---|---|
| `Modal` | ریشه — `open` / `onOpenChange` / `defaultOpen` |
| `Modal.Trigger` | دکمه‌ی بازکننده (با `asChild` روی دکمه‌ی خودت) |
| `Modal.Content` | پنل + پس‌زمینه + دکمه‌ی بستن (X) |
| `Modal.Header` / `Modal.Title` / `Modal.Description` | سرصفحه — **Title همیشه لازم است** |
| `Modal.Footer` | پاصفحه‌ی اکشن‌ها |
| `Modal.Close` | بستن (با `asChild` روی دکمه) |

## دسترس‌پذیری (خودکار)

- مدیریت فوکس: ورود به مودال، بازگشت به تریگر بعد از بستن
- بستن با `Escape` و کلیک روی پس‌زمینه + قفل اسکرول بدنه
- `aria-modal` و اتصال Title/Description توسط Radix

## نکات استفاده

- ✅ تأیید مخرب («حذف کنم؟»)، فرم‌های کوتاه، جزئیات رکورد
- ❌ محتوای طولانی (اسکرول در مودال تجربه‌ی بدی است) → صفحه‌ی جدا
- ❰ نکته RTL: دکمه‌ی بستن با `end-4` در سمت منطقی است — در فارسی چپ می‌افتد

## توکن‌های استفاده‌شده

`color.surface-raised` · `color.border` · `color.text/45` (پس‌زمینه) · `radius.lg` · `shadow.lg`
