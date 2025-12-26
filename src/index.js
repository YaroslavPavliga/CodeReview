'EOF'
const express = require('express');
const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Прості маршрути API
app.get('/api/users', (req, res) => {
  res.json(userController.getUsers());
});

app.get('/api/users/:id', (req, res) => {
  const user = userController.getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Користувача не знайдено' });
  }
});

app.post('/api/users', (req, res) => {
  const newUser = userController.createUser(req.body);
  res.status(201).json(newUser);
});

// Маршрут для розрахунку знижки
app.get('/api/discount', (req, res) => {
  const { price, discount } = req.query;
  const result = userController.calculateDiscount(
    parseFloat(price), 
    parseFloat(discount)
  );
  res.json({ originalPrice: price, discount, finalPrice: result });
});

// Запуск сервера
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на порті ${PORT}`);
    console.log(`📚 API доступне за адресою http://localhost:${PORT}/api`);
  });
}

module.exports = app;
EOF
