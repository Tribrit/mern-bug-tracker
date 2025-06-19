import request from 'supertest';
import app from '../server.js'; // Ensure this path is correct
import mongoose from 'mongoose';
import Bug from '../models/Bug.js'; // Ensure this path is correct

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Bug APIs', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test bug', description: 'Some issue' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });
});