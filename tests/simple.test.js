'EOF'
// Прості тести для перевірки Jest
test('Addition works', () => {
  expect(1 + 1).toBe(2);
});

test('Multiplication works', () => {
  expect(2 * 3).toBe(6);
});

test('String test', () => {
  expect('hello').toBe('hello');
});

// Моковий контролер для тестування
const mockController = {
  calculateDiscount: (price, discount) => price - (price * discount / 100)
};

test('Discount calculation', () => {
  expect(mockController.calculateDiscount(100, 10)).toBe(90);
  expect(mockController.calculateDiscount(200, 25)).toBe(150);
});
EOF
