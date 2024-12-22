/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Xóa dữ liệu cũ để tránh trùng lặp
  await knex('Category').del();

  // Thêm dữ liệu mới
  await knex('Category').insert([
    {
      id: 1,
      name: 'Laptop',
      description: 'Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Ghế',
      description: 'Ghế công thái học là mẫu ghế được thiết kế với hình dáng và các tính năng đặc biệt, giúp giảm thiểu áp lực lên cơ thể, giảm đau lưng và cổ và giúp người sử dụng giữ được tư thế ngồi đúng để tránh những tổn thương do ngồi lâu.',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Bàn phím',
      description: 'Bàn phím là một thiết bị đầu vào cho máy tính, được sử dụng để nhập dữ liệu và điều khiển các chức năng của máy tính. Bàn phím bao gồm một loạt các phím nhấn, các phím chữ, số, các ký tự đặc biệt và các phím chức năng để thực hiện các tác vụ.',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: 'Âm thanh',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
};
