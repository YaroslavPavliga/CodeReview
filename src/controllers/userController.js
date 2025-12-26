// Приклад коду з навмисними помилками для Code Review
let users = [
  { id: 1, name: 'Іван Петренко', email: 'ivan@example.com', age: 25 },
  { id: 2, name: 'Марія Коваленко', email: 'maria@example.com', age: 30 }
];

class UserController {
  // 1. Погана назва змінної
  getUsers(req, res) {
    return res.json(users);
  }

  // 2. Використання == замість ===
  getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id); // Помилка для рев'ю
    
    if (!user) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }
    
    res.json(user);
  }

  // 3. Відсутня валідація
  createUser(req, res) {
    const newUser = req.body;
    
    // "Магічне число" - погана практика
    newUser.id = users.length + 1;
    
    users.push(newUser);
    res.status(201).json(newUser);
  }

  // 4. Занадто складна функція
  updateUser(req, res) {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }
    
    // Багато логіки в одній функції
    users[index] = { ...users[index], ...updatedData };
    
    // Дублювання коду
    console.log(`Користувач ${id} оновлено`);
    
    res.json(users[index]);
  }

  // 5. Проблеми з форматуванням
  deleteUser(req,res) {
    const id = parseInt(req.params.id);
    
        const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }
    
    users.splice(index, 1);
    res.status(204).send();
  }
  
  // 6. Невдала назва методу
  calculateDiscount(price, discountPercent) {
    // Не обробляємо крайні випадки
    const discountAmount = price * (discountPercent / 100);
    return price - discountAmount;
  }
  
  // 7. Додаткова функція для тестування
  validateEmail(email) {
    // Проста (не ідеальна) перевірка email
    return email.includes('@') && email.includes('.');
  }
}

module.exports = new UserController();
