import request from 'supertest';
import app from './app';

describe('Test the root path', () => {
  it('Should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
