/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  try {
    // Xóa dữ liệu cũ nếu cần (Chỉ nên làm khi chắc chắn không ảnh hưởng đến dữ liệu quan trọng)
    await knex('ProductCategory').del();
    await knex('Product').del();

    // Thêm dữ liệu vào bảng Product
    await knex('Product').insert([
      {
        id: 1,
        name: 'Lenovo ThinkPad T14s Gen 2 (Intel)',
        productId: 'T14sG2i09NU',
        brandId: 3, 
        description: '',
        tagName: 'THINKPAD BỀN BỈ - ỔN ĐỊNH',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '13290000', quantity: '56' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1185G7, 4C/8T' },
          { title: 'Tốc độ', info: '1.2GHz , Lên tới' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '32GB LPDDR4 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '32GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '256 GB (M.2 NVMe)' },
        ]),
        productImage: JSON.stringify("uploads/product/T14sG2i09NU-main.png"),
        imageUrl: JSON.stringify({
          img0: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-ab5.png',
          img1: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-619.png',
          img2: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-aec.png',
          img3: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-094.png',
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: "ASUS ROG Zephyrus G14",
        productId: "ROGG142024",
        brandId: 1,
        description: "",
        tagName: "HIỆU NĂNG CAO CHO GAME THỦ",
        variants: JSON.stringify([
          { color: "trắng", version: "2024", type: "Chính hãng", price: "42000000", quantity: "30" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "AMD Ryzen 9 5900HS, 8C/16T" },
          { title: "Tốc độ", info: "3.0GHz , Lên tới 4.6GHz" },
          { title: "Bộ nhớ đệm", info: "16MB" },
          { title: "Card onboard", info: "AMD Radeon Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3060" },
          { title: "Dung lượng", info: "16GB DDR4 3200MHz" },
          { title: "Hỗ trợ tối đa", info: "32GB" },
          { title: "Dung lượng SSD", info: "1TB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads/product/ROGG142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads/product/ASUS ROG Zephyrus G14-desc-2bf.webp",
          img1: "uploads/product/ASUS ROG Zephyrus G14-desc-1af.webp",
          img2: "uploads/product/ASUS ROG Zephyrus G14-desc-274.webp",
          img3: "uploads/product/ASUS ROG Zephyrus G14-desc-3d4.webp",
          img4: "uploads/product/ASUS ROG Zephyrus G14-desc-8cc.webp"

        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 3,
        name: "Dell XPS 15 9520",
        productId: "XPS159520",
        brandId: 2,
        description: "",
        tagName: "THIẾT KẾ CAO CẤP - HIỆU SUẤT MẠNH MẼ",
        variants: JSON.stringify([
          { color: "bạc", version: "2024", type: "Chính hãng", price: "52000000", quantity: "20" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "Intel Core i9 12900H, 14C/20T" },
          { title: "Tốc độ", info: "2.5GHz , Lên tới 5.0GHz" },
          { title: "Bộ nhớ đệm", info: "24MB" },
          { title: "Card onboard", info: "Intel UHD Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
          { title: "Dung lượng", info: "32GB DDR5 4800MHz" },
          { title: "Hỗ trợ tối đa", info: "64GB" },
          { title: "Dung lượng SSD", info: "2TB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads\\product\\XPS159520-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell XPS 15 9520-desc-bb4.webp",
          img1: "uploads\\product\\Dell XPS 15 9520-desc-901.webp",
          img2: "uploads\\product\\Dell XPS 15 9520-desc-4ac.webp",
          img3: "uploads\\product\\Dell XPS 15 9520-desc-23f.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 4,
        name: "Microsoft Surface Laptop Studio",
        productId: "SurfaceLS2024",
        brandId: 4,
        description: "",
        tagName: "LINH HOẠT VÀ SÁNG TẠO",
        variants: JSON.stringify([
          { color: "bạc", version: "2024", type: "Chính hãng", price: "48000000", quantity: "15" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "Intel Core i7 11370H, 4C/8T" },
          { title: "Tốc độ", info: "3.3GHz , Lên tới 4.8GHz" },
          { title: "Bộ nhớ đệm", info: "12MB" },
          { title: "Card onboard", info: "Intel Iris Xe Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
          { title: "Dung lượng", info: "16GB LPDDR4x" },
          { title: "Hỗ trợ tối đa", info: "16GB" },
          { title: "Dung lượng SSD", info: "512GB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads\\product\\SurfaceLS2024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Microsoft Surface Laptop Studio-desc-a5a.webp",
          img1: "uploads\\product\\Microsoft Surface Laptop Studio-desc-5fa.webp",
          img2: "uploads\\product\\Microsoft Surface Laptop Studio-desc-c85.webp",
          img3: "uploads\\product\\Microsoft Surface Laptop Studio-desc-7df.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 5,
        name: 'MSI Prestige 14',
        productId: 'Prestige142024',
        brandId: 5,
        description: '',
        tagName: 'HIỆU NĂNG CAO - THIẾT KẾ ĐẸP',
        variants: JSON.stringify([
          { color: 'trắng', version: '2024', type: 'Chính hãng', price: '17490000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.4GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR4X 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Prestige142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\MSI Prestige 14-desc-a66.webp",
          img1: "uploads\\product\\MSI Prestige 14-desc-1d7.webp",
          img2: "uploads\\product\\MSI Prestige 14-desc-253.webp",
          img3: "uploads\\product\\MSI Prestige 14-desc-947.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 6,
        name: 'Acer Aspire 7',
        productId: 'Aspire72024',
        brandId: 6,
        description: '',
        tagName: 'HIỆU SUẤT CAO - GIÁ HỢP LÝ',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '15990000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'AMD Ryzen 5 5600H, 6C/12T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.2GHz' },
          { title: 'Bộ nhớ đệm', info: '19MB' },
          { title: 'Card onboard', info: 'AMD Radeon Graphics' },
          { title: 'Card rời', info: 'NVIDIA GTX 1650' },
          { title: 'Dung lượng', info: '8GB DDR4 3200MHz' },
          { title: 'Hỗ trợ tối đa', info: '32GB' },
          { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Aspire72024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer Aspire 7-desc-95f.webp",
          img1: "uploads\\product\\Acer Aspire 7-desc-5ea.webp",
          img2: "uploads\\product\\Acer Aspire 7-desc-647.webp",
          img3: "uploads\\product\\Acer Aspire 7-desc-97e.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 7,
        name: 'Razer Blade 14',
        productId: 'Blade142024',
        brandId: 7,
        description: '',
        tagName: 'CÔNG NGHỆ TIÊN PHONG',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '41990000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'AMD Ryzen 9 5900HX, 8C/16T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.6GHz' },
          { title: 'Bộ nhớ đệm', info: '20MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA RTX 3080' },
          { title: 'Dung lượng', info: '16GB DDR4 3200MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB' },
          { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Blade142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer Blade 14-desc-514.webp",
          img1: "uploads\\product\\Razer Blade 14-desc-5bb.webp",
          img2: "uploads\\product\\Razer Blade 14-desc-d2d.webp",
          img3: "uploads\\product\\Razer Blade 14-desc-ca4.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 8,
        name: 'GIGABYTE Aero 15',
        productId: 'Aero152024',
        brandId: 8,
        description: '',
        tagName: 'ĐA PHƯƠNG TIỆN - SÁNG TẠO',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '32990000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i9 12900HK, 14C/20T' },
          { title: 'Tốc độ', info: '3.8GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '30MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA RTX 3070 Ti' },
          { title: 'Dung lượng', info: '32GB DDR5 4800MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB' },
          { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Aero152024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\GIGABYTE Aero 15-desc-8c4.webp",
          img1: "uploads\\product\\GIGABYTE Aero 15-desc-e83.webp",
          img2: "uploads\\product\\GIGABYTE Aero 15-desc-832.webp",
          img3: "uploads\\product\\GIGABYTE Aero 15-desc-c27.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 9,
        name: 'Dell XPS 13 Plus (2024)',
        productId: 'XPS13Plus2024',
        brandId: 2, 
        description: '',
        tagName: 'HIỆU SUẤT CAO - SÁNG TẠO TỐT',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '29990000', quantity: '34' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1360P, 12C/16T' },
          { title: 'Tốc độ', info: '1.8GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '18MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\XPS13Plus2024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-d8b.webp",
          img1: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-718.webp",
          img2: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-1ca.webp",
          img3: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-4d2.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 10,
        name: 'MSI Stealth 16 Studio A13V',
        productId: 'Stealth16A13V',
        brandId: 5, 
        description: '',
        tagName: 'GAMING ĐỈNH CAO - ĐẲNG CẤP',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '45990000', quantity: '20' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i9 13900H, 14C/20T' },
          { title: 'Tốc độ', info: '2.6GHz, Lên tới 5.4GHz' },
          { title: 'Bộ nhớ đệm', info: '24MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA GeForce RTX 4070 8GB' },
          { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
          { title: 'Dung lượng SSD', info: '2TB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Stealth16A13V-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-3ea.webp",
          img1: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-b84.webp",
          img2: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-dd5.webp",
          img3: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-1d6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 11,
        name: 'Acer Swift 5 (2024)',
        productId: 'Swift52024',
        brandId: 6,
        description: '',
        tagName: 'NHẸ NHÀNG - MẠNH MẼ',
        variants: JSON.stringify([
          { color: 'xám', version: '2024', type: 'Chính hãng', price: '18990000', quantity: '40' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1365U, 10C/12T' },
          { title: 'Tốc độ', info: '2.0GHz, Lên tới 4.9GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Swift52024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer Swift 5 (2024)-desc-0e3.webp",
          img1: "uploads\\product\\Acer Swift 5 (2024)-desc-cbf.webp",
          img2: "uploads\\product\\Acer Swift 5 (2024)-desc-d46.webp",
          img3: "uploads\\product\\Acer Swift 5 (2024)-desc-431.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 12,
        name: 'VAIO SX12 (2024)',
        productId: 'SX122024',
        brandId: 9, 
        description: '',
        tagName: 'MỎNG NHẸ - HIỆU SUẤT CAO',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '23990000', quantity: '27' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
          { title: 'Tốc độ', info: '1.8GHz, Lên tới 4.4GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '8GB LPDDR4x 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 3)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\SX122024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO SX12 (2024)-desc-4b9.webp",
          img1: "uploads\\product\\VAIO SX12 (2024)-desc-53f.webp",
          img2: "uploads\\product\\VAIO SX12 (2024)-desc-b14.webp",
          img3: "uploads\\product\\VAIO SX12 (2024)-desc-282.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 13,
        name: 'Razer Blade 15 (2024)',
        productId: 'Blade152024',
        brandId: 7, 
        description: '',
        tagName: 'GAMING CAO CẤP - ĐỘ BỀN CAO',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '43990000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 13700H, 14C/20T' },
          { title: 'Tốc độ', info: '2.2GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '24MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA GeForce RTX 4080 12GB' },
          { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
          { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Blade152024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer Blade 15 (2024)-desc-2c8.webp",
          img1: "uploads\\product\\Razer Blade 15 (2024)-desc-23c.webp",
          img2: "uploads\\product\\Razer Blade 15 (2024)-desc-6fc.webp",
          img3: "uploads\\product\\Razer Blade 15 (2024)-desc-28a.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    // Thêm dữ liệu vào bảng ProductCategory
    await knex('ProductCategory').insert([
      {
        productId: 1, 
        categoryId: 1,
      },
      {
        productId: 2, 
        categoryId: 1,
      },
      {
        productId: 3, 
        categoryId: 1,
      },
      {
        productId: 4, 
        categoryId: 1,
      },
      {
        productId: 5, 
        categoryId: 1,
      },
      {
        productId: 6, 
        categoryId: 1,
      },
      {
        productId: 7, 
        categoryId: 1,
      },
      {
        productId: 8, 
        categoryId: 1,
      },
      {
        productId: 9, 
        categoryId: 1,
      },
      {
        productId: 10, 
        categoryId: 1,
      },
      {
        productId: 11, 
        categoryId: 1,
      },
      {
        productId: 12, 
        categoryId: 1,
      },
      {
        productId: 13, 
        categoryId: 1,
      },
    ]);

    console.log('Seed dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
  }
};

