'EOF'
// Тести для контролера користувачів
const UserController = {
  calculateDiscount: function(price, discountPercent) {
    return price - (price * discountPercent / 100);
  },
  
  validateEmail: function(email) {
    return email.includes('@') && email.includes('.');
  }
};

describe('UserController Tests', () => {
  describe('calculateDiscount()', () => {
    test('10% discount from 100 should be 90', () => {
      // Arrange
      const price = 100;
      const discount = 10;
      
      // Act
      const result = UserController.calculateDiscount(price, discount);
      
      // Assert
      expect(result).toBe(90);
    });
    
    test('25% discount from 200 should be 150', () => {
      expect(UserController.calculateDiscount(200, 25)).toBe(150);
    });
    
    test('0% discount should return original price', () => {
      expect(UserController.calculateDiscount(100, 0)).toBe(100);
    });
  });
  
  describe('validateEmail()', () => {
    test('valid email should return true', () => {
      expect(UserController.validateEmail('user@example.com')).toBe(true);
    });
    
    test('email without @ should return false', () => {
      expect(UserController.validateEmail('userexample.com')).toBe(false);
    });
    
    test('email without dot should return false', () => {
      expect(UserController.validateEmail('user@example')).toBe(false);
    });
  });
});
EOF
