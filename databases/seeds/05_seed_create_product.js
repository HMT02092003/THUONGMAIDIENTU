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
      {
        id: 14,
        name: 'Ghế Công Thái Học GAMI Crom',
        productId: 'GMCROM01CF',
        brandId: 5, 
        description: '',
        tagName: 'VỮNG TƯ THẾ VỮNG TƯƠNG LAI',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '15' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '10' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Khung lưng', info: 'Lưng trên có thể chỉnh lên xuống 5cm Phần cụm đỡ lưng dưới thiết kế 2 mảnh cánh bướm Butterfit 2D + cụm 4 lò xo ôm trọn phần thắt lưng' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm bền bỉ chống rỉ' },
          { title: 'Tựa đầu', info: 'HeadFlex 8D thông minh' },
          { title: 'Bệ tỳ tay', info: 'Xoay360 độ giúp đỡ khủy tay tốt nhất' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Cơ chế kháng lực Tension Control linh hoạt + Trụ thủy lực WITHUS Class 4. Multi Button bằng nút, Ngả lưng lên tới 4 cấp, giữ khóa ngả ở mỗi cấp' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMCROM01CF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-61a.webp",
          img1: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-017.webp",
          img2: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-f0b.webp",
          img3: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-6f2.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 15,
        name: 'Ghế Ergonomic ASUS',
        productId: 'GASER01',
        brandId: 1,
        description: '',
        tagName: 'Thiết Kế Tinh Tế, Tối Ưu Công Năng',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '10' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '8' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Khung lưng', info: 'Khung kim loại chắc chắn, có thể điều chỉnh độ cao' },
          { title: 'Chân ghế', info: 'Chân nhôm bền bỉ chống rỉ sét' },
          { title: 'Tựa đầu', info: 'Tựa đầu Ergonomic điều chỉnh theo nhiều hướng' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh thắng lực Tension Control' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GASER01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Ergonomic ASUS-desc-594.webp",
          img1: "uploads\\product\\Ghế Ergonomic ASUS-desc-c8e.webp",
          img2: "uploads\\product\\Ghế Ergonomic ASUS-desc-1e8.webp",
          img3: "uploads\\product\\Ghế Ergonomic ASUS-desc-b37.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 16,
        name: 'Ghế Gaming Dell',
        productId: 'GDEL01',
        brandId: 2,
        description: '',
        tagName: 'Ghế Gaming Siêu Bền, Cực Êm Ái',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '12' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '6' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, chống bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
          { title: 'Chân ghế', info: 'Chân nhôm chắc chắn, chịu lực tốt' },
          { title: 'Tựa đầu', info: 'Tựa đầu thông minh có thể điều chỉnh độ cao' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay 3D, điều chỉnh được cả chiều cao và góc nghiêng' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control, thích hợp cho mọi tư thế ngồi' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GDEL01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Gaming Dell-desc-9fd.webp",
          img1: "uploads\\product\\Ghế Gaming Dell-desc-260.webp",
          img2: "uploads\\product\\Ghế Gaming Dell-desc-a63.webp",
          img3: "uploads\\product\\Ghế Gaming Dell-desc-a61.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 17,
        name: 'Ghế Văn Phòng Lenovo',
        productId: 'GLEN01',
        brandId: 3,
        description: '',
        tagName: 'Tinh Tế, Đảm Bảo Sự Thoải Mái',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '20' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại chống oxy hóa, điều chỉnh độ cao lưng' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt theo góc ngồi' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh lên xuống, xoay 360 độ' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control với nhiều cấp độ' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GLEN01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-c7d.webp",
          img1: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-455.webp",
          img2: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-dd6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 18,
        name: 'Ghế Văn Phòng Microsoft',
        productId: 'GMIC01',
        brandId: 4,
        description: '',
        tagName: 'Tiện Lợi, Hỗ Trợ Tốt Cho Mọi Tư Thế',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '13' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '10' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh theo chiều cao và độ nghiêng' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh Tension Control' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMIC01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-e64.webp",
          img1: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-0c4.webp",
          img2: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-bbd.webp",
          img3: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-c80.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 19,
        name: 'Ghế Công Thái Học MSI',
        productId: 'GMSI01',
        brandId: 5,
        description: '',
        tagName: 'Ghế Công Thái Học Cao Cấp',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '10' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '8' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, dễ vệ sinh' },
          { title: 'Khung lưng', info: 'Khung kim loại bền chắc, điều chỉnh độ cao' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm chống rỉ sét' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh theo chiều cao và góc nghiêng' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control đa cấp độ' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMSI01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Công Thái Học MSI-desc-883.webp",
          img1: "uploads\\product\\Ghế Công Thái Học MSI-desc-dd7.webp",
          img2: "uploads\\product\\Ghế Công Thái Học MSI-desc-cfa.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 20,
        name: 'Bàn phím Cơ Monsgeek M1W SP Aluminium CNC',
        productId: 'FullMonsgeekM1w05NF',
        brandId: 3,
        description: '',
        tagName: 'PHÍM CƠ GIẢM SỐC - TĂNG TỐC CÔNG VIỆC',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'M1W V3 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '32' },
          { color: 'Hồng', version: 'M1W V5 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '29' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'AKKO Piano V3 Pro - Hotswap' },
          { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
          { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '82Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ Custom' },
          { title: 'Layout', info: '75%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMonsgeekM1w05NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-de8.webp",
          img1: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-705.webp",
          img2: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-8f3.webp",
          img3: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-1d6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 21,
        name: 'Bàn phím Cơ Razer BlackWidow V3',
        productId: 'FullRazerBWV3A01',
        brandId: 7,
        description: '',
        tagName: 'PHÍM CƠ CHẤT LƯỢNG CAO - DÀNH CHO GAME',
        variants: JSON.stringify([
          { color: 'Xanh', version: 'V3 SP - Razer Green Switch', type: 'Chính hãng', price: '2490000', quantity: '50' },
          { color: 'Đen', version: 'V3 SP - Razer Yellow Switch', type: 'Chính hãng', price: '2490000', quantity: '40' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Razer Green/Razer Yellow' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullRazerBWV3A01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-238.webp",
          img1: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-0ee.webp",
          img2: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-784.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 22,
        name: 'Bàn phím Cơ Logitech G Pro X',
        productId: 'FullLogitechGProX03',
        brandId: 6,
        description: '',
        tagName: 'PHÍM CƠ DÀNH CHO GAME THỦ - CHUYÊN NGHIỆP',
        variants: JSON.stringify([
          { color: 'Đen', version: 'G Pro X - Logitech GX Blue Switch', type: 'Chính hãng', price: '2790000', quantity: '35' },
          { color: 'Đen', version: 'G Pro X - Logitech GX Red Switch', type: 'Chính hãng', price: '2790000', quantity: '25' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Logitech GX Blue/GX Red' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '87 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Tenkeyless' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullLogitechGProX03-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-95e.webp",
          img1: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-b21.webp",
          img2: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-63d.webp",
          img3: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-157.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 23,
        name: 'Bàn phím Cơ SteelSeries Apex Pro',
        productId: 'FullSteelSeriesApexPro07',
        brandId: 8,
        description: '',
        tagName: 'PHÍM CƠ CAO CẤP - DÀNH CHO GAME VÀ CÔNG VIỆC',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Apex Pro - OmniPoint Switch', type: 'Chính hãng', price: '4990000', quantity: '12' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'OmniPoint Switch' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullSteelSeriesApexPro07-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-178.webp",
          img1: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-2bc.webp",
          img2: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-893.webp",
          img3: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-1ec.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 24,
        name: 'Bàn phím Cơ Corsair K95 RGB Platinum',
        productId: 'FullCorsairK95RGBPlatinum04',
        brandId: 9,
        description: '',
        tagName: 'PHÍM CƠ RGB - ĐỘ BỀN CAO',
        variants: JSON.stringify([
          { color: 'Đen', version: 'K95 RGB - Cherry MX Speed Switch', type: 'Chính hãng', price: '3990000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Speed' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullCorsairK95RGBPlatinum04-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-949.webp",
          img1: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-bff.webp",
          img2: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-0ae.webp",
          img3: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-c4c.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 25,
        name: 'Bàn phím Cơ AKKO 3068B Plus',
        productId: 'FullAKKO3068BPlus01',
        brandId: 5,
        description: '',
        tagName: 'PHÍM CƠ NHỎ GỌN - MÀU SẮC SÁNG BÓNG',
        variants: JSON.stringify([
          { color: 'Trắng', version: '3068B Plus - AKKO Switch', type: 'Chính hãng', price: '1690000', quantity: '60' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'AKKO Switch' },
          { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
          { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '68 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: '65%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullAKKO3068BPlus01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-af4.webp",
          img1: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-3e6.webp",
          img2: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-d72.webp",
          img3: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-e21.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 26,
        name: 'Bàn phím Cơ ASUS TUF K7',
        productId: 'FullASUSTUFK702',
        brandId: 1,
        description: '',
        tagName: 'PHÍM CƠ CHỐNG CHƠI GAME - GIẢM MỆT MỎI',
        variants: JSON.stringify([
          { color: 'Đen', version: 'TUF K7 - ROG RX Optical Switch', type: 'Chính hãng', price: '2890000', quantity: '45' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'ROG RX Optical' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullASUSTUFK702-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-e95.webp",
          img1: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-9b7.webp",
          img2: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-472.webp",
          img3: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-3ca.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 27,
        name: 'Bàn phím Cơ Dell Alienware AW510K',
        productId: 'FullDellAW510K04',
        brandId: 2,
        description: '',
        tagName: 'PHÍM CƠ CHỐNG LỖI NHẤN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'AW510K - Cherry MX Brown', type: 'Chính hãng', price: '3590000', quantity: '20' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Brown' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullDellAW510K04-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-416.webp",
          img1: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-17f.webp",
          img2: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-dbd.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 28,
        name: 'Bàn phím Cơ Microsoft Modern',
        productId: 'FullMicrosoftModern05',
        brandId: 4,
        description: '',
        tagName: 'PHÍM CƠ NHỎ GỌN DÀNH CHO MÁY TÍNH BÀN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Modern - Microsoft Custom Switch', type: 'Chính hãng', price: '1990000', quantity: '38' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Microsoft Custom Switch' },
          { title: 'Kết nối qua:', info: 'Bluetooth/USB C' },
          { title: 'Loại kết nối', info: 'Không dây/Có dây' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '80 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: '75%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMicrosoftModern05-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fea.webp",
          img1: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-857.webp",
          img2: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fd5.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 29,
        name: 'Bàn phím Cơ MSI Vigor GK30',
        productId: 'FullMSIVigorGK3009',
        brandId: 5,
        description: '',
        tagName: 'PHÍM CƠ BỀN BỈ - ĐẶC BIỆT DÀNH CHO GAME',
        variants: JSON.stringify([
          { color: 'Đen', version: 'GK30 - Blue Switch', type: 'Chính hãng', price: '1590000', quantity: '60' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Blue Switch' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMSIVigorGK3009-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-d77.webp",
          img1: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-e43.webp",
          img2: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-c0d.webp",
          img3: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-706.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 30,
        name: 'bàn phím Cơ GIGABYTE AORUS K9',
        productId: 'FullGigabyteAORUSK904',
        brandId: 8,
        description: '',
        tagName: 'PHÍM CƠ RGB - TỐC ĐỘ CAO',
        variants: JSON.stringify([
          { color: 'Đen', version: 'K9 - Cherry MX Red', type: 'Chính hãng', price: '3190000', quantity: '30' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Red' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullGigabyteAORUSK904-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-a69.webp",
          img1: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-6b6.webp",
          img2: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-650.webp",
          img3: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-e8c.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 31,
        name: 'Loa Razer Willen',
        productId: 'MarshallWillen01NF',
        brandId: 7,
        description: '',
        tagName: 'MARSHALL SALE TO - LO CHI VỀ GIÁ',
        variants: JSON.stringify([
          { color: 'Đen', version: 'A2 - MX Black', type: 'Chính hãng', price: '2390000', quantity: '21' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '10,05cm' },
          { title: 'Chiều rộng:', info: '4,04cm' },
          { title: 'Chiều cao', info: '10,16cm' },
          { title: 'Trọng lượng', info: '0.8kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Wireless Dual (kết nối 2 loa)' },
          { title: 'Tổng công suất', info: '10W' },
        ]),
        productImage: JSON.stringify("uploads\\product\\MarshallWillen01NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Razer Willen-desc-d29.webp",
          img1: "uploads\\product\\Loa Razer Willen-desc-9ba.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 32,
        name: 'Loa JBL Flip 5',
        productId: 'JBLFlip5NF',
        brandId: 1,
        description: '',
        tagName: 'SALE JBL LOA BLUETOOTH',
        variants: JSON.stringify([
          { color: 'Xanh dương', version: 'JBL Flip 5', type: 'Chính hãng', price: '2990000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '18,4cm' },
          { title: 'Chiều rộng:', info: '6,9cm' },
          { title: 'Chiều cao', info: '5,3cm' },
          { title: 'Trọng lượng', info: '0.96kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Bass Radiator' },
          { title: 'Tổng công suất', info: '20W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\JBLFlip5NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa JBL Flip 5-desc-dc1.webp",
          img1: "uploads\\product\\Loa JBL Flip 5-desc-02f.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 33,
        name: 'Loa Sony SRS-XB12',
        productId: 'SonySRSXB12NF',
        brandId: 2,
        description: '',
        tagName: 'SALE LOA SONY',
        variants: JSON.stringify([
          { color: 'Đỏ', version: 'SRS-XB12', type: 'Chính hãng', price: '1690000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '9,5cm' },
          { title: 'Chiều rộng:', info: '9,5cm' },
          { title: 'Chiều cao', info: '9,5cm' },
          { title: 'Trọng lượng', info: '0.25kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Extra Bass' },
          { title: 'Tổng công suất', info: '5W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SonySRSXB12NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Sony SRS-XB12-desc-c6e.webp",
          img1: "uploads\\product\\Loa Sony SRS-XB12-desc-440.webp",
          img2: "uploads\\product\\Loa Sony SRS-XB12-desc-1cf.webp",
          img3: "uploads\\product\\Loa Sony SRS-XB12-desc-872.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 34,
        name: 'Loa Bose SoundLink Revolve+',
        productId: 'BoseSoundLinkRevolve+01NF',
        brandId: 4,
        description: '',
        tagName: 'SALE LOA BOSE',
        variants: JSON.stringify([
          { color: 'Đen', version: 'SoundLink Revolve+', type: 'Chính hãng', price: '7490000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '18,4cm' },
          { title: 'Chiều rộng:', info: '10,5cm' },
          { title: 'Chiều cao', info: '18,4cm' },
          { title: 'Trọng lượng', info: '1.5kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: '360° Sound' },
          { title: 'Tổng công suất', info: '30W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\BoseSoundLinkRevolve+01NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-cd8.webp",
          img1: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-d3d.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 35,
        name: 'Loa Ultimate Ears Wonderboom 2',
        productId: 'UEWonderboom2NF',
        brandId: 5,
        description: '',
        tagName: 'SALE LOA UE',
        variants: JSON.stringify([
          { color: 'Xanh dương', version: 'Wonderboom 2', type: 'Chính hãng', price: '2890000', quantity: '18' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '10cm' },
          { title: 'Chiều rộng:', info: '10cm' },
          { title: 'Chiều cao', info: '10cm' },
          { title: 'Trọng lượng', info: '0.5kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: '360° Sound' },
          { title: 'Tổng công suất', info: '20W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\UEWonderboom2NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-861.webp",
          img1: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-a2b.webp",
          img2: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-5c5.webp",
          img3: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-9db.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 36,
        name: 'VAIO Gram +View 2023',
        productId: 'GramView2301CO',
        brandId: 9,
        description: '',
        tagName: 'SALE LOA UE',
        variants: JSON.stringify([
          { color: 'Bạc', version: 'Wo2 simple', type: 'Chính hãng', price: '9890000', quantity: '5' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước có chân đế', info: '36cm 24.55cm 0.83cm' },
          { title: 'Trọng lượng:', info: '0.66kg' },
          { title: 'Kích thước màn hình', info: '16' },
          { title: 'Độ phân giải', info: '2560 x 1600' },
          { title: 'Tỷ lệ màn hình', info: '16:10' },
          { title: 'Lớp phủ bề mặt', info: 'Chống chói' },
          { title: 'Tấm nền', info: 'IPS' },
          { title: 'Tần số quét', info: '60Hz' }
        ]),
        productImage: JSON.stringify("uploads\\product\\GramView2301CO-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO Gram +View 2023-desc-37e.webp",
          img1: "uploads\\product\\VAIO Gram +View 2023-desc-2c9.webp",
          img2: "uploads\\product\\VAIO Gram +View 2023-desc-33e.webp",
          img3: "uploads\\product\\VAIO Gram +View 2023-desc-3a7.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
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
      {
        productId: 14, 
        categoryId: 2,
      },
      {
        productId: 15, 
        categoryId: 2,
      },
      {
        productId: 16, 
        categoryId: 2,
      },
      {
        productId: 17, 
        categoryId: 2,
      },
      {
        productId: 18, 
        categoryId: 2,
      },
      {
        productId: 19, 
        categoryId: 2,
      },
      {
        productId: 20, 
        categoryId: 3,
      },
      {
        productId: 21, 
        categoryId: 3,
      },
      {
        productId: 22, 
        categoryId: 3,
      },
      {
        productId: 23, 
        categoryId: 3,
      },
      {
        productId: 24, 
        categoryId: 3,
      },
      {
        productId: 25, 
        categoryId: 3,
      },
      {
        productId: 26, 
        categoryId: 3,
      },
      {
        productId: 27, 
        categoryId: 3,
      },
      {
        productId: 28, 
        categoryId: 3,
      },
      {
        productId: 29, 
        categoryId: 3,
      },
      {
        productId: 30, 
        categoryId: 3,
      },
      {
        productId: 31, 
        categoryId: 4,
      },
      {
        productId: 32, 
        categoryId: 4,
      },
      {
        productId: 33, 
        categoryId: 4,
      },
      {
        productId: 34, 
        categoryId: 4,
      },
      {
        productId: 35, 
        categoryId: 4,
      },
      {
        productId: 36, 
        categoryId: 5,
      }
    ]);

    console.log('Seed dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
  }
};

