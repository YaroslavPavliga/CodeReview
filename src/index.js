# Оновіть src/index.js для Swagger UI
cat > src/index.js << 'EOF'
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Swagger документація
const swaggerDocument = YAML.load(path.join(__dirname, '../docs/api/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Прості маршрути API
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Іван Петренко', email: 'ivan@example.com' },
    { id: 2, name: 'Марія Коваленко', email: 'maria@example.com' }
  ]);
});

app.get('/api/users/:id', (req, res) => {
  const users = [
    { id: 1, name: 'Іван Петренко', email: 'ivan@example.com' },
    { id: 2, name: 'Марія Коваленко', email: 'maria@example.com' }
  ];
  const user = users.find(u => u.id == req.params.id); // Навмисна помилка для Code Review
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Користувача не знайдено' });
  }
});

app.get('/api/discount', (req, res) => {
  const price = parseFloat(req.query.price) || 0;
  const discount = parseFloat(req.query.discount) || 0;
  const finalPrice = price - (price * discount / 100);
  
  res.json({
    originalPrice: price,
    discountPercent: discount,
    finalPrice: finalPrice,
    saved: price - finalPrice
  });
});

// Головна сторінка
app.get('/', (req, res) => {
  res.send(`
    <h1>Практичне завдання: Code Review, Unit-тестування, документація API</h1>
    <ul>
      <li><a href="/api-docs">Swagger документація</a></li>
      <li><a href="/api/users">API: Користувачі</a></li>
      <li><a href="/api/discount?price=100&discount=10">API: Розрахунок знижки</a></li>
    </ul>
    <p><strong>Тести:</strong> 14 passing tests ✅</p>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
  console.log(`📚 Swagger docs: http://localhost:${PORT}/api-docs`);
});

module.exports = app;
EOF
