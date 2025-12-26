const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Отримати всіх користувачів
router.get('/', userController.getAllUsers);

// Отримати користувача по ID
router.get('/:id', userController.getUserById);

// Створити нового користувача
router.post('/', userController.createUser);

// Оновити користувача
router.put('/:id', userController.updateUser);

// Видалити користувача
router.delete('/:id', userController.deleteUser);

module.exports = router;
