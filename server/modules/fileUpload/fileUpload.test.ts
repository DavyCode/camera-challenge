import request from 'supertest';
import app from '../../setup/app';

const uploadBody = {
  base64EncodedImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzk',
};

describe('Uploads', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Should allow POST to /upload', async () => {
    const response = await request(app).post('/upload').send(uploadBody);
    expect(response.status).toBe(200);
  });
});
