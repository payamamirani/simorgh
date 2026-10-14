# 🪶 Simorgh Design System

سیستم دیزاین **سیمرغ** — مجموعه‌ای از اصول، توکن‌ها و کامپوننت‌ها برای ساخت محصولاتی یکپارچه، زیبا و قابل توسعه.

> مثل سیمرغ که از پرهای بسیاری شکل می‌گیرد، این سیستم از قطعات کوچک و منظم، تجربه‌ای یکپارچه می‌سازد.

## ساختار پروژه

```
simorgh/
├── .github/workflows/ci.yml   # پایپ‌لاین CI (بیلد + تست + Storybook)
├── docs/                      # مستندات و راهنماها
│   └── principles.md          # اصول طراحی سیمرغ
├── foundations/               # پایه‌های طراحی (بنیادها)
│   ├── colors.md              # پالت رنگ
│   ├── typography.md          # تایپوگرافی
│   └── spacing.md             # فاصله‌ها و شبکه
└── packages/                  # پکیج‌های monorepo (pnpm workspaces)
    ├── tokens/                # @simorgh/tokens — منبع اصلی حقیقت
    │   ├── tokens/
    │   │   ├── palette.tokens.json   # لایه ۱: پالت خام (رنگ‌ها)
    │   │   ├── base.tokens.json      # فاصله، شعاع، فونت، سایه
    │   │   └── themes/
    │   │       ├── light.tokens.json # لایه ۲: نقش‌ها — تم روشن
    │   │       └── dark.tokens.json  # لایه ۲: نقش‌ها — تم تیره
    │   └── scripts/build.mjs  # Style Dictionary → CSS/JS
    └── ui/                    # @simorgh/ui — کامپوننت‌ها + Storybook
        ├── src/components/    # کامپوننت‌ها (فعلاً: Button)
        └── .storybook/        # تنظیمات Storybook (RTL + تم)
```

## استک فنی

| ابزار | نقش |
|---|---|
| **React + TypeScript** | ساخت کامپوننت‌ها |
| **Tailwind CSS v4** | استایل‌دهی — توکن‌ها از طریق `@theme` تزریق می‌شوند |
| **Radix UI** | منطق کامپوننت‌ها (کیبورد، فوکس، ARIA) |
| **Style Dictionary v4** | تبدیل توکن‌های W3C به CSS Variables / JS |
| **pnpm workspaces** | مدیریت monorepo |
| **Storybook 9** | ویترین و مستندات زنده‌ی کامپوننت‌ها |
| **Vitest + Testing Library** | تست کامپوننت‌ها |
| **GitHub Actions** | CI — بیلد، تست و بیلد Storybook در هر PR |

## معماری توکن (دو لایه)

```
palette.tokens.json  ← مخزن خام رنگ‌ها (هرگز مستقیم استفاده نمی‌شود)
        ↓ ارجاع
themes/light.json    ← نقش‌ها: primary, surface, text, border, ...
themes/dark.json     ← همین نقش‌ها با مقادیر مناسب تم تیره
        ↓ Style Dictionary
dist/css/vars.css        → :root { --simorgh-color-primary: ... }
dist/css/dark.css        → [data-theme="dark"] { --simorgh-color-primary: ... }
dist/css/tailwind.css    → @theme { --color-primary: var(--simorgh-color-primary) }
```

**قاعده‌ی طلایی:** کامپوننت‌ها فقط از توکن‌های معنایی استفاده می‌کنند (`bg-primary` ✅ نه `bg-teal-700` ❌). به همین دلیل تم تیره یا هر تم دیگری فقط با عوض کردن `data-theme` روی `<html>` فعال می‌شود.

## شروع به کار

```bash
# پیش‌نیاز: Node 20+ و pnpm
pnpm install

# اجرای Storybook (ویترین کامپوننت‌ها)
pnpm storybook

# بیلد همه‌ی پکیج‌ها
pnpm build

# اجرای تست‌ها
pnpm test
```

## نقشه راه

- [x] تعریف اصول و صدای برند
- [x] پالت رنگ (رنگ‌های اصلی، خنثی، معنایی)
- [x] مقیاس تایپوگرافی
- [x] سیستم فاصله‌گذاری و شبکه (Grid)
- [x] توکن‌های پایه (رنگ، فونت، سایه، شعاع گوشه)
- [x] زیرساخت: monorepo + خط لوله‌ی توکن + Storybook + CI
- [ ] کامپوننت‌های سطح اول (Button ✅، Input، Text، Stack، Icon)
- [ ] کامپوننت‌های ترکیبی (Card، Modal، ...)
- [ ] تست بصری (Chromatic)
- [ ] انتشار پکیج‌ها به npm

## نحوه استفاده

هر تغییر در بنیادها (foundations) باید اول در `packages/tokens/tokens/` اعمال بشه و بعد به مستندات منتقل بشه. توکن‌ها **منبع اصلی حقیقت** (single source of truth) هستن — همه‌چیز دیگه ازشون مشتق می‌شه.
