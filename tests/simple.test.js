// Простий робочий тест
test('1 + 1 should equal 2', () => {
  expect(1 + 1).toBe(2);
});

test('2 * 3 should equal 6', () => {
  expect(2 * 3).toBe(6);
});

test('string length', () => {
  expect('hello').toHaveLength(5);
});
