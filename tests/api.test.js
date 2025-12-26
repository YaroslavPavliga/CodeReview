const request = require('supertest');
const app = require('../src/index');

describe('API Integration Tests', () => {
  test('GET /api/users повинен повертати статус 200', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
  });
  
  test('GET /api/users повинен повертати масив користувачів', async () => {
    const response = await request(app).get('/api/users');
    expect(Array.isArray(response.body)).toBe(true);
  });
});
