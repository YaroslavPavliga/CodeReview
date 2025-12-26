const userController = require('../src/controllers/userController');

describe('UserController Unit Tests', () => {
  
  describe('calculateDiscount()', () => {
    // AAA патерн: Arrange, Act, Assert
    
    test('повинен коректно розраховувати знижку', () => {
      // Arrange - підготовка
      const price = 100;
      const discountPercent = 10;
      
      // Act - виконання
      const result = userController.calculateDiscount(price, discountPercent);
      
      // Assert - перевірка
      expect(result).toBe(90);
    });
    
    test('повинен повертати ту саму ціну при знижці 0%', () => {
      // Arrange
      const price = 100;
      const discountPercent = 0;
      
      // Act
      const result = userController.calculateDiscount(price, discountPercent);
      
      // Assert
      expect(result).toBe(100);
    });
    
    test('повинен обробляти знижку 100%', () => {
      expect(userController.calculateDiscount(100, 100)).toBe(0);
    });
    
    test('повинен коректно обробляти дробові значення', () => {
      expect(userController.calculateDiscount(150, 25)).toBe(112.5);
    });
  });
  
  describe('validateEmail()', () => {
    test('повинен приймати валідний email', () => {
      expect(userController.validateEmail('test@example.com')).toBe(true);
    });
    
    test('повинен відхиляти email без @', () => {
      expect(userController.validateEmail('test.example.com')).toBe(false);
    });
    
    test('повинен відхиляти email без крапки', () => {
      expect(userController.validateEmail('test@example')).toBe(false);
    });
    
    test('повинен відхиляти пустий email', () => {
      expect(userController.validateEmail('')).toBe(false);
    });
  });
  
  // Тест для перевірки обробки помилок
  describe('Edge Cases', () => {
    test('не повинен ламатись при передачі нечислових значень (має оброблятись в реальному коді)', () => {
      // Цей тест може провалитись - це покаже необхідність додати валідацію
      expect(() => {
        userController.calculateDiscount('сто', 'десять');
      }).toThrow();
    });
  });
});
