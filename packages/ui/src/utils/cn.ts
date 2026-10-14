/** اتصال کلاس‌ها — نسخه‌ی سبک و بدون وابستگی */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
