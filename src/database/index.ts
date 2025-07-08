import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('src/database/database.sqlite');
export const db = drizzle({ client: sqlite });
