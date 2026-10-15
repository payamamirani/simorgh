# Checkbox

> چک‌باکس — منطق و کیبورد از Radix، شامل حالت سوم (indeterminate).

## دمو

زنده در Storybook: `Forms/Checkbox` — استوری «همه‌ی حالت‌ها».

## API

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `label` | `ReactNode` | — | متن کنار چک‌باکس (کلیک = تاگل) |
| `description` | `string` | — | توضیح ریز زیر لیبل |
| `invalid` | `boolean` | `false` | حالت خطا — `aria-invalid` + رنگ danger |
| `checked` | `boolean` \| `'indeterminate'` | — | کنترل‌شده؛ حالت سوم برای «بخشی انتخاب‌شده» |
| `...props` | Radix CheckboxProps | — | `onCheckedChange`, `defaultChecked`, `disabled`, ... |

## دسترس‌پذیری

- Space برای تاگل، فوکس با کیبورد کاملاً قابل مشاهده
- بدون `label` → فقط دکمه رندر می‌شود (برای جدول‌ها؛ `aria-label` فراموش نشود)

## نکات استفاده

- ✅ رضایت‌نامه‌ها، فیلترها، انتخاب ردیف جدول (indeterminate)
- ❌ انتخاب تنها یک گزینه از چند → Radio (آینده) یا Select

## توکن‌های استفاده‌شده

`color.primary` / `color.on-primary` / `color.border-strong` / `color.danger` · `radius.sm`
