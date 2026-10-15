# @simorgh/ui

## 0.2.0

### Minor Changes

- 0c9d9d5: **تکمیل مجموعه‌ی کامپوننت‌ها — ۱۵ کامپوننت جدید**
  
  - **Overlay:** `Modal` قبلاً + این نسخه: `Tooltip`، `Popover`
  - **Feedback:** `Toast` (با API ساده‌ی `toast()` و `<Toaser />`)، `Spinner`، `Progress` (RTL با width)، `Skeleton`
  - **Forms:** `Switch` (جهت RTL-aware)، `Radio` قبلاً
  - **Navigation:** `Accordion`، `DropdownMenu` (با آیتم danger)، `Tabs` قبلاً
  - **Layout:** `Grid`، `Separator`
  - **Media:** `Avatar` (با fallback حروف اول و رندر فوری بدون تصویر)
  - **Typography:** `Kbd`، `Code`
  - **داده:** `Table` ترکیبی با ساختار معنایی
  - **ابزار:** `VisuallyHidden`
  - رفع رفتار jsdom با Radix (Pointer API mock در setup تست)
- 4ba7dd6: **کامپوننت‌های Overlay و ناوبری**
  
  - `Modal` (Radix Dialog): API ترکیبی، فوکس/Escape/aria کامل، دکمه‌ی بستن در سمت منطقی
  - `Radio` + `RadioGroup` (Radix): ناوبری فلش‌ها، label/description، حالت invalid
  - `Tabs` (Radix): underline style، RTL-aware keyboard nav
  - `Alert`: بازخورد درون‌صفحه‌ای چهار رنگ با role معنایی (alert/status)
  - آیکون‌های جدید: `AlertCircleIcon`، `AlertTriangleIcon`، `InfoIcon`
- 56708a9: **فرم‌های سیمرغ + آماده‌سازی انتشار**
  
  - کامپوننت‌های جدید: `Field` (سیم‌کشی خودکار دسترس‌پذیری فرم)، `Textarea`، `Select`، `Checkbox` (با Radix و پشتیبانی indeterminate)
  - آیکون جدید: `MinusIcon`
  - ستاد انتشار: Changesets + ورک‌فلو Release
- 7220bd3: **سیستم رنگ نسخه ۲ — هویت برند جدید**
  
  - پالت خام جدید: ۱۰ خانواده × ۱۰ سطح در فرمت HSLA (teal، gold، sky-blue، charcoal، midnight-navy، green، amber، red، slate، violet)
  - توکن‌های معنایی گسترش‌یافته: primary(+hover/active/subtle)، secondary، accent، text.*، surface.* (+background/sunken/overlay)، border.* (+focus/disabled)، link، selection، focus-ring، وضعیت‌ها با subtle/on-*، و ai/ai-subtle برای قابلیت‌های هوش مصنوعی
  - تم تیره بازطراحی روی Midnight Navy (نه معکوسِ تم روشن)
  - شفافیت فقط در لایه‌ی معنایی؛ پالت خام همیشه opaque
  - دروازه‌ی کنتراست ارتقا یافت: ۵۶ جفت شامل مرزهای UI (3:1) و توکن‌های subtle با ترکیب ریاضی
  - مهاجرت کامپوننت‌ها: danger→error، آورلی مودال به token اختصاصی، حلقه فوکس/مرز فوکس توکنی، تینت‌های soft به توکن‌های *-subtle
  - پیش‌نمایش پالت جدید با ۱۰۰ رنگ + دو تم + کنتراست زنده

### Patch Changes

- Updated dependencies [56708a9]
- Updated dependencies [7220bd3]
  - @simorgh/tokens@0.2.0
