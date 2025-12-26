// Спочатку простий тест, потім додамо більше
const userController = require('../src/controllers/userController');

describe('UserController Tests', () => {
  test('calculateDiscount should work correctly', () => {
    const result = userController.calculateDiscount(100, 10);
    expect(result).toBe(90);
  });

  test('validateEmail should accept valid email', () => {
    const result = userController.validateEmail('test@example.com');
    expect(result).toBe(true);
  });
});
