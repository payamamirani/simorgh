# Button

> دکمه — رایج‌ترین اکشن رابط کاربری. کامپوننت مرجع سیمرغ.

## دمو

زنده در Storybook: `Components/Button`.

## API

### Props

| نام | نوع | پیش‌فرض | توضیح |
|---|---|---|---|
| `variant` | `primary` \| `secondary` \| `ghost` | `primary` | نوع ظاهری |
| `size` | `sm` \| `md` \| `lg` | `md` | اندازه |
| `loading` | `boolean` | `false` | اسپینر نشان می‌دهد، دکمه غیرفعال می‌شود و `aria-busy` می‌گیرد |
| `asChild` | `boolean` | `false` | رندر روی المان فرزند (دکمه‌ی لینک‌دار) — توسط Radix Slot |
| `disabled` | `boolean` | `false` | غیرفعال |
| `type` | `button` \| `submit` \| `reset` | `button` | پیش‌فرض `button` تا فرم‌ها تصادفی submit نشوند |
| `...props` | `ButtonHTMLAttributes` | — | پاس به `<button>` |

## حالت‌ها (States)

- [x] پیش‌فرض / Hover / Focus (با کیبورد، حلقه‌ی واضح) / Disabled / Loading

## دسترس‌پذیری

- `loading` → `aria-busy="true"` + `disabled`
- فوکس با کیبورد کاملاً قابل مشاهده (`focus-visible` + `ring`)
- اسپینر `aria-hidden` است (تکرار اطلاعات نمی‌کند)
- انیمیشن اسپینر با `motion-safe` فقط برای کاربران بدون کاهش حرکت

## نکات استفاده

- ✅ اکشن‌ها («ذخیره»، «انصراف») — `variant="primary"` فقط برای اکشن اصلی هر صفحه (حداکثر یکی)
- ✅ دکمه‌ی لینک‌دار: `asChild` + `<a>`
- ❌ لینک ناوبری معمولی → لینک معمولی با استایل، نه دکمه
- ❌ پرش بین بخش‌های محتوا

## توکن‌های استفاده‌شده

- `color.primary` / `color.primary-hover` / `color.on-primary`
- `color.surface-raised` / `color.border` / `color.text`
- `radius.md` / `font.size.body` / `font.size.caption` / `font.weight.medium`
