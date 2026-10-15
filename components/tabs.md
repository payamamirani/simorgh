# Tabs

> سوییچ بین نماهای هم‌خانواده در همان صفحه — با Radix Tabs.

## دمو

زنده در Storybook: `Navigation/Tabs`.

## API (ترکیبی)

| بخش | توضیح |
|---|---|
| `Tabs` | ریشه — `value` / `defaultValue` / `onValueChange` |
| `Tabs.List` | نوار تب (با `aria-label`) |
| `Tabs.Trigger` | هر تب — `value` |
| `Tabs.Content` | پنل هر تب — `value` |

## دسترس‌پذیری

- ناوبری کیبورد با فلش‌ها (در RTL جهت‌ها خودکار برعکس می‌شوند)
- `role=tablist/tab/tabpanel` و اتصال aria خودکار

## نکات استفاده

- ✅ بخش‌بندی محتوای هم‌ارز (نمای کلی/سفارش‌ها/تنظیمات)
- ❰ ترکیب با Badge برای شمارنده در تب — استوری «با نشان شمارنده»
- ❌ ناوبری بین صفحات → مسیریابی، نه تب

## توکن‌های استفاده‌شده

`color.primary` (خط فعال) · `color.text` / `color.text-muted` · `color.border` · `space.4`
