import dotenv from 'dotenv';

// Load .env
dotenv.config();

export const { PORT, HOST, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_CONFIG_SET_EMAIL, MAIL_TO } =
  process.env;
