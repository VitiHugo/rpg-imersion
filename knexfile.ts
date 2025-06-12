require('dotenv').config({ path: '.env.development' });
require('ts-node/register');

import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection:
    process.env.DATABASE_URL +
    (process.env.NODE_ENV === 'development' ? '' : '?sslmode=require'),
  migrations: {
    extension: 'ts',
  },
};

export default config;