'EOF'
// Контролер користувачів з навмисними помилками для Code Review
class UserController {
  constructor() {
    this.users = [
      { id: 1, name: 'Іван Петренко', email: 'ivan@example.com' },
      { id: 2, name: 'Марія Коваленко', email: 'maria@example.com' }
    ];
  }

  // Метод з поганою назвою для рев'ю
  getUsers() {
    return this.users;
  }

  // Використання == замість ===
  getUserById(id) {
    return this.users.find(user => user.id == id); // Помилка для рев'ю
  }

  // Розрахунок знижки (для тестів)
  calculateDiscount(price, discountPercent) {
    // Магічне число 100
    return price - (price * discountPercent / 100);
  }

  // Валідація email (для тестів)
  validateEmail(email) {
    return email.includes('@') && email.includes('.');
  }

  // Створення користувача без валідації
  createUser(userData) {
    const newUser = {
      id: this.users.length + 1, // Потенційна проблема
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }
}

module.exports = new UserController();
EOF
