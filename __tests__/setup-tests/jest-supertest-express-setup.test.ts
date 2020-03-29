import request from 'supertest';
import app from '@src/app';


describe('testing supertest setup', () => {
  test('Root / Url 200 status check', (done) => request(app.expressApp).get('/').expect(200, done));

  test('Invalid URL /xyz/abc/123 status check', (done) => request(app.expressApp).get('/xyz/abc/123').expect(404, done));
});
