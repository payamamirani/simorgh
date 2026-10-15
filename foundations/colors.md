# سیستم رنگ سیمرغ — نسخه ۲

> هویت: فیروزه‌ای سیمرغ (اصلی) + طلای امپراتوری (ثانویه) + آبی آسمانی (تعاملی) + سرمه‌ای نیمه‌شب (ساختار تیره) + بنفش ملایم (AI)
> فرمت مرجع همه‌ی رنگ‌ها: `hsla(Hue, Saturation%, Lightness%, Alpha)`

منبع اصلی حقیقت: `packages/tokens/tokens/` — این فایل فقط خلاصه و توضیح است.

## معماری دو لایه

```
پالت خام (palette.tokens.json)      ← ۱۰ خانواده × ۱۰ سطح (50…900) — همیشه opaque
        ↓ ارجاع
توکن‌های معنایی (themes/*.json)     ← نقش‌ها + توکن‌های شفاف (subtle/focus-ring/overlay)
        ↓ Style Dictionary
CSS Variables + Tailwind @theme      ← آنچه کامپوننت‌ها مصرف می‌کنند
```

**قاعده‌ی طلایی:** کامپوننت فقط نقش می‌بیند (`bg-primary` ✅ / `bg-teal-700` ❌). تم تیره فقط با `data-theme="dark"` روی `<html>` فعال می‌شود — پالت بین دو تم ثابت است، فقط مپینگ معنایی عوض می‌شود.

## پالت خام — ۱۰ خانواده

| خانواده | Hue | کاربرد |
|---|---|---|
| `teal` | ۱۸۳° | رنگ اصلی برند — دکمه‌های اصلی، حالت‌های فعال |
| `gold` | ۴۲° | تأکید ثانویه — به‌صورت محدود و هدفمند |
| `sky-blue` | ۲۱۰° | لینک‌ها، عناصر تعاملی، info |
| `charcoal` | ۲۱۶° | متن و ساختار خنثی (خاکستری سرد اصلی) |
| `midnight-navy` | ۲۱۶° | پس‌زمینه‌ها و سطوح ساختاری تم تیره |
| `green` | ۱۵۳° | موفقیت |
| `amber` | ۳۱° | هشدار |
| `red` | ۳۵۷° | خطا و عملیات مخرب |
| `slate` | ۲۱۴° | متن ثانویه، آیکون خاموش، خنثی ملایم |
| `violet` | ۲۵۴° | قابلیت‌های هوش مصنوعی |

هر خانواده hue ثابت دارد؛ فقط Lightness (و کمی Saturation) بین ۱۰ سطح تغییر می‌کند.

## توکن‌های معنایی

| گروه | توکن‌ها |
|---|---|
| **برند** | `primary` (+hover/active/subtle)، `secondary`، `accent` |
| **متن** | `text.primary` / `text.secondary` / `text.muted` / `text.inverse` / `text.disabled` |
| **سطوح** | `background`، `surface`، `surface-raised`، `surface-sunken`، `overlay` |
| **مرزها** | `border`، `border-strong`، `border-focus`، `border-disabled` |
| **تعاملی** | `link`، `link-hover`، `selection`، `focus-ring` |
| **وضعیت** | `success/warning/error/info` (+ هرکدام `-subtle` و `on-*`) |
| **ویژه** | `ai`، `ai-subtle`، `on-ai` |

### نگاشت کلیدی

| توکن | تم روشن | تم تیره |
|---|---|---|
| `primary` | `teal.700` | `teal.400` |
| `secondary` | `gold.500` | `gold.400` |
| `text.primary` | `charcoal.900` | `charcoal.50` |
| `background` | `charcoal.100` | `midnight-navy.900` |
| `surface-raised` | سفید خالص | `midnight-navy.700` |
| `link` | `sky-blue.700` | `sky-blue.400` |
| `error` | `red.700` | `red.300`* |
| `ai` | `violet.700` | `violet.300`* |

> *سطح‌ها بر اساس **عدد** کنتراست انتخاب شده‌اند نه حس — مثلاً error در تم تیره از 300 استفاده می‌کند چون 400 زیر استاندارد 4.5:1 می‌ماند.

## شفافیت (آلفا)

- پالت خام **همیشه opaque** است
- شفافیت فقط در لایه‌ی معنایی: `*-subtle` (۱۰–۱۶٪)، `focus-ring` (۴۵–۵۰٪)، `overlay` (۵۵–۶۵٪)
- به‌جای `opacity` روی کل کامپوننت (که خوانایی متن را کم می‌کند) از این توکن‌ها استفاده کنید

## دسترس‌پذیری

- `scripts/check-contrast.mjs` در **هر بیلد** ۵۶ جفت حیاتی را چک می‌کند:
  - متن‌ها ≥ 4.5:1 (AA) در هر دو تم
  - مرزهای UI معنادار (`border-strong`، `border-focus`) ≥ 3:1
  - توکن‌های `*-subtle` پس از ترکیب ریاضی با سطح، با همان آستانه‌ی متن
- رد شدن هر جفت، بیلد را متوقف می‌کند
- رنگ هرگز تنها حامل معنا نیست — کامپوننت‌ها آیکون/متن هم دارند (نمونه: Alert)

## پیش‌نمایش

فایل `packages/tokens/preview/palette.html` را در مرورگر باز کن — ۱۰۰ رنگ با مقادیر HSLA، توکن‌های معنایی، نمونه‌ی UI در دو تم و نسبت‌های کنتراست زنده.
