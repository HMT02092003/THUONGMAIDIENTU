/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Xóa dữ liệu cũ để tránh trùng lặp
  await knex('Brand').del();

  // Thêm dữ liệu mới
  await knex('Brand').insert([
    {
      id: 1,
      name: 'ASUS',
      description: 'ASUS luôn là thương hiệu được đánh giá cao về mọi mặt. Từng dòng sản phẩm của hãng đều sở hữu thiết kế phù hợp với người dùng mục tiêu, đi kèm với hiệu năng tốt, độ hoàn thiện xứng tầm tiền và nhiều tính năng dẫn đầu xu thế, thỏa mãn tính tò mò và ưa sự mới mẻ của người dùng hiện đại.',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Dell',
      description: 'Dell là thương hiệu nổi tiếng khi sở hữu nhiều sản phẩm laptop, phụ kiện, PC chất lượng cao với mức giá rất phải chăng. Các dòng laptop nổi bật và được ưa chuộng như Dell XPS, Dell Inspiron, Dell Vostro, Dell Latitude, Dell Alienware, Dell Gaming trải dài tới nhiều phân khúc khác nhau, dễ dàng lựa chọn và sử dụng',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Lenovo',
      description: 'Sở hữu thiết kế thanh lịch, tối giản cùng kiểu dáng đơn giản mà hiện đại, laptop Lenovo luôn đảm bảo được sự cứng cáp, trau chuốt trên từng đường nét. Đi kèm với đó là tổ hợp cấu hình mạnh mẽ, trang bị bộ vi xử lý tân tiến, thời lượng pin ấn tượng mang đến cho người dùng sự linh hoạt về thiết kế và mượt mà về hiệu năng',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  console.log('Seed data has been inserted successfully.');
};
