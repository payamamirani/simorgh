# Input

> فیلد ورودی متن — پایه‌ی همه‌ی فرم‌ها. ورودی بومی HTML با استایل و رفتار سیمرغ.

## دمو

زنده در Storybook: `Components/Input` — شامل دموی ترکیب با لیبل، پیام خطا و فرم ورود.

## API

### Props

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `size` | `sm` \| `md` \| `lg` | `md` | اندازه (با Button هم‌تراز) |
| `invalid` | `boolean` | `false` | حالت خطا — `aria-invalid` تنظیم و رنگ `danger` اعمال می‌شود |
| `type` | `string` | `text` | نوع ورودی (email, password, search, ...) |
| `...props` | `InputHTMLAttributes` | — | بقیه‌ی prop های استاندارد (`id`, `name`, `disabled`, ...) پاس می‌شوند |

## حالت‌ها (States)

- [x] پیش‌فرض
- [x] Hover (حاشیه پررنگ‌تر)
- [x] Focus (حاشیه + حلقه‌ی نرم فیروزه‌ای — قابل مشاهده با کیبورد)
- [x] Invalid (حاشیه و حلقه‌ی قرمز آجری + `aria-invalid`)
- [x] Disabled (کدر + غیرقابل کلیک)
- [ ] Loading — مربوط به فرم است نه ورودی؛ در آینده در کامپوننت `Form` مدیریت می‌شود

## دسترس‌پذیری

- عنصر بومی `<input>` — همه‌ی رفتارهای استاندارد کیبورد و صفحه‌خوان
- `invalid` → `aria-invalid="true"` (هم برای صفحه‌خوان، هم قلاب استایل)
- برای پیام خطا: `aria-describedby` را به id متن خطا وصل کن (دموی Storybook)
- همیشه با `<label htmlFor>` استفاده کن

## نکات استفاده

- ✅ فرم‌های ورود، جستجو، تنظیمات — هر جا متن تک‌خطی لازم است
- ❌ متن‌های چندخطی → بعداً `Textarea`
- ❌ انتخاب از گزینه‌ها → بعداً `Select`
- برای محتوای لاتین (ایمیل، رمز) سمت مصرف‌کننده `dir="ltr"` بده

## توکن‌های استفاده‌شده

- `color.border` / `color.border-strong` / `color.surface-raised`
- `color.text` / `color.text-muted` (placeholder)
- `color.primary` (focus) / `color.danger` (invalid)
- `radius.md` / `font.size.body` / `font.size.caption`
