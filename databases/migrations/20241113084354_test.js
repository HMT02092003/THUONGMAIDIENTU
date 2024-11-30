/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  // Bảng User
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

  // Bảng Role
  await knex.schema.createTable('Role', (table) => {
    table.increments('id').primary();
    table.string('name').unique();
  });

  // Bảng Permission
  await knex.schema.createTable('Permission', (table) => {
    table.increments('id').primary();
    table.string('name').unique();
  });

  // Bảng UserRole
  await knex.schema.createTable('UserRole', (table) => {
    table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.primary(['userId', 'roleId']);
  });

  // Bảng RolePermission
  await knex.schema.createTable('RolePermission', (table) => {
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.integer('permissionId').unsigned().references('id').inTable('Permission').onDelete('CASCADE');
    table.integer('value').notNullable();
    table.primary(['roleId', 'permissionId']);
  });

  // Bảng Brands
  await knex.schema.createTable('Brand', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng Products
  await knex.schema.createTable('Product', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('brandId').unsigned().references('id').inTable('Brand').onDelete('CASCADE');
    table.decimal('price', 10, 2).notNullable();
    table.integer('quantity').notNullable();
    table.text('description').nullable();
    table.json('specifications').nullable();
    table.string('imageUrl').nullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng Orders
  await knex.schema.createTable('Order', (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
    table.dateTime('orderDate').defaultTo(knex.fn.now());
    table.enu('status', ['pending', 'processing', 'shipped', 'delivered', 'cancelled']).defaultTo('pending');
    table.decimal('totalAmount', 10, 2).notNullable();
    table.text('shippingAddress').nullable();
    table.enu('paymentMethod', ['cod', 'credit_card', 'paypal', 'bank_transfer']).notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng OrderDetails
  await knex.schema.createTable('OrderDetail', (table) => {
    table.increments('id').primary();
    table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
    table.integer('productId').unsigned().references('id').inTable('Product').onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.decimal('unitPrice', 10, 2).notNullable();
    table.decimal('subtotal', 10, 2).notNullable();
  });

  // Bảng Cart
  await knex.schema.createTable('Cart', (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
    table.integer('productId').unsigned().references('id').inTable('Product').onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.dateTime('addedAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTableIfExists('Cart');
  await knex.schema.dropTableIfExists('OrderDetail');
  await knex.schema.dropTableIfExists('Order');
  await knex.schema.dropTableIfExists('Product');
  await knex.schema.dropTableIfExists('Brand');
  await knex.schema.dropTableIfExists('RolePermission');
  await knex.schema.dropTableIfExists('UserRole');
  await knex.schema.dropTableIfExists('Permission');
  await knex.schema.dropTableIfExists('Role');
  await knex.schema.dropTableIfExists('User');
};
