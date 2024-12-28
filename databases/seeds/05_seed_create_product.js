// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export const seed = async function (knex) {
//   try {
//     // Xóa dữ liệu cũ nếu cần (Chỉ nên làm khi chắc chắn không ảnh hưởng đến dữ liệu quan trọng)
//     await knex('ProductCategory').del();
//     await knex('Product').del();

//     // Thêm dữ liệu vào bảng Product
//     await knex('Product').insert([
//       {
//         id: 1,
//         name: 'ASUS Laptop X123',
//         productId: 'ASUS-X123',
//         brandId: 1, // Đảm bảo Brand với id=1 đã tồn tại
//         description: 'Laptop ASUS với cấu hình mạnh mẽ, màn hình sắc nét, và thời lượng pin ấn tượng.',
//         tagName: 'laptop, asus, gaming',
//         variants: JSON.stringify([
//           { color: 'Trắng', version: '2024', type: 'Chính hãng', price: '123333333', quantity: '123' },
//           { version: '131', color: 'red', type: 'Xách tay', price: '123123123', quantity: '12312' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'i7' },
//           { title: 'VGA', info: '3070' },
//         ]),
//         productImage: JSON.stringify('uploads/product/12-main.png'),
//         imageUrl: JSON.stringify({
//           img0: 'uploads/product/adasdassa-desc-a7d.jpg',
//           img1: 'uploads/product/adasdassa-desc-22c.webp',
//           img2: 'uploads/product/adasdassa-desc-4a7.jpg',
//           img3: 'uploads/product/adasdassa-desc-89b.png',
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//     ]);

//     // Thêm dữ liệu vào bảng ProductCategory
//     await knex('ProductCategory').insert([
//       {
//         productId: 1, // ASUS Laptop X123
//         categoryId: 1, // Đảm bảo Category với id=1 đã tồn tại
//       },
//     ]);

//     console.log('Seed dữ liệu thành công!');
//   } catch (error) {
//     console.error('Lỗi khi seed dữ liệu:', error);
//   }
// };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  try {
    // Xóa dữ liệu cũ nếu cần (Chỉ nên làm khi chắc chắn không ảnh hưởng đến dữ liệu quan trọng)
    await knex('ProductCategory').del();
    await knex('Product').del();

    // Tạo mảng để lưu trữ các bản ghi sản phẩm
    const products = [];

    for (let i = 1; i <= 100; i++) {
      const product = {
        id: i,
        name: `ASUS Laptop X${i}`,
        productId: `ASUS-X${i}`,
        brandId: 1, // Đảm bảo Brand với id=1 đã tồn tại
        description: `Laptop ASUS với cấu hình mạnh mẽ, màn hình sắc nét, và thời lượng pin ấn tượng. (Sản phẩm ${i})`,
        tagName: `laptop, asus, gaming`,
        variants: JSON.stringify([
          { color: 'Trắng', version: `2024-${i}`, type: 'Chính hãng', price: (100000000 + i * 1000000).toString(), quantity: `${i * 10}` },
          { version: `131-${i}`, color: 'red', type: 'Xách tay', price: (90000000 + i * 1000000).toString(), quantity: `${i * 15}` },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: `i7-${i}` },
          { title: 'VGA', info: `3070-${i}` },
        ]),
        productImage: JSON.stringify(`uploads/product/${i}-main.png`),
        imageUrl: JSON.stringify({
          img0: `uploads/product/${i}-desc-a7d.jpg`,
          img1: `uploads/product/${i}-desc-22c.webp`,
          img2: `uploads/product/${i}-desc-4a7.jpg`,
          img3: `uploads/product/${i}-desc-89b.png`,
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      products.push(product);
    }

    // Thêm dữ liệu vào bảng Product
    await knex('Product').insert(products);

    // Thêm dữ liệu vào bảng ProductCategory (một mối quan hệ giữa sản phẩm và danh mục)
    const productCategories = [];
    for (let i = 1; i <= 100; i++) {
      productCategories.push({
        productId: i, // Sản phẩm với id=i
        categoryId: 1, // Đảm bảo Category với id=1 đã tồn tại
      });
    }
    await knex('ProductCategory').insert(productCategories);

    console.log('Seed dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
  }
};
