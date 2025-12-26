// Імітуємо контролер, якщо ще немає
const userController = {
  calculateDiscount: function(price, discountPercent) {
    return price - (price * discountPercent / 100);
  },
  
  validateEmail: function(email) {
    return email.includes('@') && email.includes('.');
  }
};

// Тести
test('calculateDiscount calculates 10% discount from 100', () => {
  expect(userController.calculateDiscount(100, 10)).toBe(90);
});

test('calculateDiscount returns same price for 0% discount', () => {
  expect(userController.calculateDiscount(100, 0)).toBe(100);
});

test('validateEmail accepts valid email', () => {
  expect(userController.validateEmail('test@example.com')).toBe(true);
});

test('validateEmail rejects email without @', () => {
  expect(userController.validateEmail('test.example.com')).toBe(false);
});
