import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/database/schema',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'src/database/database.sqlite',
  },
});
