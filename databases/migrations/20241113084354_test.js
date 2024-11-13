// migrations/20231114123456_create_users_table.js
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // Trường id là khóa chính và tự động tăng
      table.timestamps(true, true); // Tạo trường created_at và updated_at tự động
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users'); // Xóa bảng users nếu rollback
  };
  