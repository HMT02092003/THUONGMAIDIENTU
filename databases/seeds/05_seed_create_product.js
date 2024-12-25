/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Xóa dữ liệu cũ để tránh trùng lặp
  await knex('Product').del();

  // Thêm dữ liệu mới vào bảng Product
  await knex('Product').insert([
    {
      id: 1,
      name: 'ASUS Laptop X123',
      productId: 'ASUS-X123',
      brandId: 1, // ASUS
      description: 'Laptop ASUS với cấu hình mạnh mẽ, màn hình sắc nét, và thời lượng pin ấn tượng.',
      tagName: 'laptop, asus, gaming',
      variants: JSON.stringify([{ color: 'black', size: '15 inch' }, { color: 'silver', size: '13 inch' }]),
      specifications: JSON.stringify({ processor: 'Intel i7', ram: '16GB', storage: '512GB SSD' }),
      productImage: JSON.stringify(['uploads/products/asus_x123_1.png', 'uploads/products/asus_x123_2.png']),
      imageUrl: 'uploads/products/asus_x123.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Dell Inspiron 15',
      productId: 'DELL-INSPIRON15',
      brandId: 2, // Dell
      description: 'Laptop Dell với thiết kế mỏng nhẹ, hiệu năng ổn định và mức giá hợp lý.',
      tagName: 'laptop, dell, office',
      variants: JSON.stringify([{ color: 'black', size: '15 inch' }]),
      specifications: JSON.stringify({ processor: 'Intel i5', ram: '8GB', storage: '256GB SSD' }),
      productImage: JSON.stringify(['uploads/products/dell_inspiron_1.png']),
      imageUrl: 'uploads/products/dell_inspiron.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad T14',
      productId: 'LENOVO-TP-T14',
      brandId: 3, // Lenovo
      description: 'Laptop Lenovo ThinkPad T14 được thiết kế chắc chắn, phù hợp cho công việc văn phòng và doanh nhân.',
      tagName: 'laptop, lenovo, business',
      variants: JSON.stringify([{ color: 'black', size: '14 inch' }]),
      specifications: JSON.stringify({ processor: 'Intel i7', ram: '16GB', storage: '1TB SSD' }),
      productImage: JSON.stringify(['uploads/products/lenovo_t14_1.png']),
      imageUrl: 'uploads/products/lenovo_t14.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  // Liên kết sản phẩm với thể loại (Category)
  await knex('ProductCategory').insert([
    {
      productId: 1, // ASUS Laptop X123
      categoryId: 1, // Laptop
    },
    {
      productId: 2, // Dell Inspiron 15
      categoryId: 1, // Laptop
    },
    {
      productId: 3, // Lenovo ThinkPad T14
      categoryId: 1, // Laptop
    },
  ]);
};
