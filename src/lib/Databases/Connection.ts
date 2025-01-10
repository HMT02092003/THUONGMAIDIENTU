import knex from 'knex';
import { Model } from 'objection';

// Cấu hình knex
const knexInstance = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'THUONGMAIDIENTU',
    multipleStatements: true
  },
  pool: { min: 0, max: 10 }
});

// Thiết lập knex cho Objection.js
Model.knex(knexInstance);

export default knexInstance;
