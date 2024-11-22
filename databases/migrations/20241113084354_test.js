/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable('User', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.boolean('verified').defaultTo(false);
    table.string('password');
    table.string('role').defaultTo('user');
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
    table.string('provider').defaultTo('local');
    table.string('phoneNumber').nullable();
    table.dateTime('dateOfBirth').nullable();
    table.json('addressProvince').nullable();
    table.json('addressDistrict').nullable();
    table.json('addressWard').nullable();
    table.json('hometownProvince').nullable();
    table.json('hometownDistrict').nullable();
    table.json('hometownWard').nullable();
    table.string('nationality').nullable();
    table.string('img').nullable();
    table.string('gender').nullable();
    table.string('CCCD').nullable();
  });

  await knex.schema.createTable('Role', (table) => {
    table.increments('id').primary();
    table.string('name').unique();
  });

  await knex.schema.createTable('Permission', (table) => {
    table.increments('id').primary();
    table.string('name').unique();
  });

  await knex.schema.createTable('UserRole', (table) => {
    table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.primary(['userId', 'roleId']);
  });

  await knex.schema.createTable('RolePermission', (table) => {
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.integer('permissionId').unsigned().references('id').inTable('Permission').onDelete('CASCADE');
    table.integer('value').notNullable();
    table.primary(['roleId', 'permissionId']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTableIfExists('RolePermission');
  await knex.schema.dropTableIfExists('UserRole');
  await knex.schema.dropTableIfExists('Permission');
  await knex.schema.dropTableIfExists('Role');
  await knex.schema.dropTableIfExists('User');
};
