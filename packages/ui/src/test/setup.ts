import '@testing-library/jest-dom/vitest';

// jsdom این API های Pointer را ندارد اما Radix (Toast و ...) از آن‌ها استفاده می‌کند
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false as unknown as boolean;
  Element.prototype.releasePointerCapture = () => {};
  Element.prototype.setPointerCapture = () => {};
}

