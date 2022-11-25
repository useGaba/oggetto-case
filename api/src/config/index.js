import 'dotenv/config';

console.log(process.env.API_PORT)
export const config = {
  PORT: parseInt(process.env.API_PORT, 10) || 5000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'secret',
};
