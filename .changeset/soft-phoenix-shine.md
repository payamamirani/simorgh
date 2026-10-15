---
'@simorgh/tokens': minor
'@simorgh/ui': minor
---

**سیستم رنگ نسخه ۲ — هویت برند جدید**

- پالت خام جدید: ۱۰ خانواده × ۱۰ سطح در فرمت HSLA (teal، gold، sky-blue، charcoal، midnight-navy، green، amber، red، slate، violet)
- توکن‌های معنایی گسترش‌یافته: primary(+hover/active/subtle)، secondary، accent، text.*، surface.* (+background/sunken/overlay)، border.* (+focus/disabled)، link، selection، focus-ring، وضعیت‌ها با subtle/on-*، و ai/ai-subtle برای قابلیت‌های هوش مصنوعی
- تم تیره بازطراحی روی Midnight Navy (نه معکوسِ تم روشن)
- شفافیت فقط در لایه‌ی معنایی؛ پالت خام همیشه opaque
- دروازه‌ی کنتراست ارتقا یافت: ۵۶ جفت شامل مرزهای UI (3:1) و توکن‌های subtle با ترکیب ریاضی
- مهاجرت کامپوننت‌ها: danger→error، آورلی مودال به token اختصاصی، حلقه فوکس/مرز فوکس توکنی، تینت‌های soft به توکن‌های *-subtle
- پیش‌نمایش پالت جدید با ۱۰۰ رنگ + دو تم + کنتراست زنده
