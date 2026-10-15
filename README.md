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
- [x] پالت رنگ نسخه ۱ (فیروزه‌ای ملایم + خاکستری گرم + چک خودکار کنتراست WCAG)
- [x] کامپوننت‌های سطح اول: Button، Input، Text، Heading، Stack، Icon (+۵ آیکون)، Badge
- [x] کامپوننت ترکیبی: Card
- [x] کامپوننت‌های فرم: Field، Textarea، Select، Checkbox (Radix)
- [x] کامپوننت‌های سطح بعد: Modal، Radio، Tabs، Alert
- [x] تکمیل مجموعه: Toast، Switch، Tooltip، Popover، Spinner، Progress، Skeleton، Separator، Avatar، Accordion، DropdownMenu، Grid، Table، VisuallyHidden، Kbd، Code
- [ ] کامپوننت‌های آینده (در صورت نیاز): Combobox، Pagination، Breadcrumbs
- [ ] تست بصری (Chromatic)
- [x] آماده‌سازی انتشار: Changesets + ورک‌فلو Release (نیازمند NPM_TOKEN و مالکیت scope)

## انتشار (Publish)

چرخه‌ی نسخه‌ها با [Changesets](https://github.com/changesets/changesets) مدیریت می‌شود:

```bash
pnpm changeset          # توصیف تغییرات + تعیین سطح (patch/minor/major)
pnpm version-packages   # اعمال تغییرات و تولید CHANGELOG
pnpm release            # بیلد + انتشار به npm
```

ورک‌فلو `.github/workflows/release.yml` این کار را خودکار می‌کند: هر push به `main` با changeset باز → یک Pull Request نسخه می‌سازد؛ merge آن PR → انتشار به npm.

> پیش‌نیاز انتشار: ثبت‌نام npm با مالکیت scope `simorgh` (یا تغییر نام پکیج‌ها) و افزودن `NPM_TOKEN` به Secrets ریپو.

## نحوه استفاده

هر تغییر در بنیادها (foundations) باید اول در `packages/tokens/tokens/` اعمال بشه و بعد به مستندات منتقل بشه. توکن‌ها **منبع اصلی حقیقت** (single source of truth) هستن — همه‌چیز دیگه ازشون مشتق می‌شه.
