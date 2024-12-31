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
      },
      {
        id: 37,
        name: 'Balo ASUS Rog Strix',
        productId: 'RogBag2302BL',
        brandId: 1,
        description: '',
        tagName: 'SALE BALO GAMING',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Pro Gaming', type: 'Chính hãng', price: '1990000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Vải chống nước' },
          { title: 'Kích thước', info: '50cm x 32cm x 18cm' },
          { title: 'Trọng lượng', info: '1.2kg' },
          { title: 'Dung tích', info: '25L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\RogBag2302BL-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Balo ASUS Rog Strix-desc-20e.webp",
          img1: "uploads\\product\\Balo ASUS Rog Strix-desc-de0.webp",
          img2: "uploads\\product\\Balo ASUS Rog Strix-desc-1bf.webp",
          img3: "uploads\\product\\Balo ASUS Rog Strix-desc-83a.webp" 
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 38,
        name: 'Túi Lenovo ThinkPad X1',
        productId: 'ThinkPadX1Case01',
        brandId: 3,
        description: '',
        tagName: 'SALE TÚI LAPTOP',
        variants: JSON.stringify([
          { color: 'Xám', version: 'Classic', type: 'Chính hãng', price: '1390000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Polyester' },
          { title: 'Kích thước', info: '40cm x 30cm x 8cm' },
          { title: 'Trọng lượng', info: '0.9kg' },
          { title: 'Dung tích', info: '15L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ThinkPadX1Case01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-c0a.webp",
          img1: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-bed.webp",
          img2: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-2a1.webp",
          img3: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-3c3.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 39,
        name: 'Balo Dell XPS Travel',
        productId: 'XPSBagTravel2023',
        brandId: 2,
        description: '',
        tagName: 'GIẢM GIÁ PHỤ KIỆN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Business', type: 'Chính hãng', price: '1590000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Canvas chống nước' },
          { title: 'Kích thước', info: '45cm x 28cm x 15cm' },
          { title: 'Trọng lượng', info: '1kg' },
          { title: 'Dung tích', info: '20L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\XPSBagTravel2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Balo Dell XPS Travel-desc-25f.webp",
          img1: "uploads\\product\\Balo Dell XPS Travel-desc-479.webp",
          img2: "uploads\\product\\Balo Dell XPS Travel-desc-1df.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 40,
        name: 'Bàn nâng hạ ASUS ProDesk',
        productId: 'ASUSDeskLift2023',
        brandId: 1, // ASUS
        description: 'Bàn nâng hạ chuyên dụng cho làm việc và học tập.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5290000', quantity: '10' },
          { color: 'Đen', version: 'Premium', type: 'Chính hãng', price: '6290000', quantity: '8' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '120cm x 60cm' },
          { title: 'Tải trọng tối đa', info: '80kg' },
          { title: 'Chất liệu', info: 'Gỗ MDF và khung thép' },
          { title: 'Điều chỉnh độ cao', info: '70cm - 120cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ASUSDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-b0e.webp",
          img1: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-da4.webp",
          img2: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-4cc.webp",
          img3: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-784.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 41,
        name: 'Bàn nâng hạ Dell ProLift',
        productId: 'DellDeskLift2023',
        brandId: 2, // Dell
        description: 'Bàn nâng hạ bền bỉ, phù hợp với mọi không gian.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Basic', type: 'Chính hãng', price: '4990000', quantity: '12' },
          { color: 'Xám', version: 'Advanced', type: 'Chính hãng', price: '5990000', quantity: '9' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '140cm x 70cm' },
          { title: 'Tải trọng tối đa', info: '100kg' },
          { title: 'Chất liệu', info: 'Gỗ công nghiệp phủ Melamine' },
          { title: 'Điều chỉnh độ cao', info: '65cm - 115cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DellDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-82b.webp",
          img1: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-5e0.webp",
          img2: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-e04.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 42,
        name: 'Bàn nâng hạ Lenovo FlexLift',
        productId: 'LenovoDeskLift2023',
        brandId: 3, // Lenovo
        description: 'Thiết kế hiện đại, đa năng, giúp tối ưu không gian làm việc.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5490000', quantity: '10' },
          { color: 'Đen', version: 'Deluxe', type: 'Chính hãng', price: '6490000', quantity: '7' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '160cm x 80cm' },
          { title: 'Tải trọng tối đa', info: '120kg' },
          { title: 'Chất liệu', info: 'Gỗ Plywood và khung hợp kim nhôm' },
          { title: 'Điều chỉnh độ cao', info: '60cm - 125cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LenovoDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-aad.webp",
          img1: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-8c7.webp",
          img2: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-ed1.webp",
          img3: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-eeb.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 43,
        name: 'Sạc nhanh Dell PowerCharge',
        productId: 'DellCharger2023',
        brandId: 2, // Dell
        description: 'Sạc nhanh và an toàn cho các thiết bị của bạn.',
        tagName: 'PHỤ KIỆN SẠC',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Type-C', type: 'Chính hãng', price: '990000', quantity: '25' },
          { color: 'Trắng', version: 'USB-A', type: 'Chính hãng', price: '890000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'Công suất', info: '65W' },
          { title: 'Loại cổng', info: 'Type-C, USB-A' },
          { title: 'Bảo hành', info: '12 tháng' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DellCharger2023-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 44,
        name: 'Kệ màn hình ASUS MonitorStand Pro',
        productId: 'ASUSMonitorStand2023',
        brandId: 1, // ASUS
        description: 'Kệ màn hình chắc chắn, hỗ trợ công thái học tối ưu.',
        tagName: 'PHỤ KIỆN VĂN PHÒNG',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '1290000', quantity: '15' },
          { color: 'Xám', version: 'Premium', type: 'Chính hãng', price: '1590000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '60cm x 20cm x 10cm' },
          { title: 'Tải trọng', info: '20kg' },
          { title: 'Chất liệu', info: 'Hợp kim nhôm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ASUSMonitorStand2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-174.webp",
          img1: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-f5e.webp",
          img2: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-216.webp",
          img3: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-5fa.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 45,
        name: 'Giá đỡ tai nghe MSI SoundStand',
        productId: 'MSISoundStand2023',
        brandId: 5, // MSI
        description: 'Giá đỡ tai nghe tiện dụng, phong cách.',
        tagName: 'PHỤ KIỆN ÂM THANH',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '590000', quantity: '30' },
          { color: 'Đỏ', version: 'Gaming', type: 'Chính hãng', price: '690000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều cao', info: '25cm' },
          { title: 'Chất liệu', info: 'Nhựa ABS cao cấp' },
          { title: 'Khối lượng', info: '0.5kg' }
        ]),
        productImage: JSON.stringify("uploads\\product\\MSISoundStand2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-91c.webp",
          img1: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-d36.webp",
          img2: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-233.webp",
          img3: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-1be.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 46,
        name: 'Kính thực tế ảo Oculus Quest 2',
        productId: 'OculusQuest2',
        brandId: 7, // Razer
        description: 'Kính thực tế ảo thế hệ mới với hiệu suất mạnh mẽ và chất lượng hình ảnh đỉnh cao.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { storage: '128GB', version: 'Standard', type: 'Chính hãng', price: '8500000', quantity: '20' },
          { storage: '256GB', version: 'Pro', type: 'Chính hãng', price: '10500000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Trọng lượng', info: '503g' },
          { title: 'Thời lượng pin', info: '2-3 giờ' },
          { title: 'Độ phân giải', info: '1832x1920 mỗi mắt' }
        ]),
        productImage: JSON.stringify("uploads\\product\\OculusQuest2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-a89.webp",
          img1: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-9ad.webp",
          img2: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-b60.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 47,
        name: 'Kính thực tế ảo HTC Vive Pro 2',
        productId: 'HTCVivePro2',
        brandId: 6, // Acer
        description: 'HTC Vive Pro 2 mang đến trải nghiệm VR chất lượng cao với thiết kế thoải mái và hiệu năng mạnh mẽ.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Chính hãng', price: '24000000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '4896x2448' },
          { title: 'Tần số quét', info: '120Hz' },
          { title: 'Hệ điều hành hỗ trợ', info: 'Windows 10' }
        ]),
        productImage: JSON.stringify("uploads\\product\\HTCVivePro2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-458.webp",
          img1: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-060.webp",
          img2: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-1cc.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 48,
        name: 'Kính thực tế ảo PlayStation VR2',
        productId: 'PSVR2',
        brandId: 4, // Microsoft
        description: 'Trải nghiệm thực tế ảo đỉnh cao với PlayStation VR2 dành riêng cho hệ máy PS5.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { version: 'Bundle', type: 'Chính hãng', price: '14990000', quantity: '12' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '2000x2040 mỗi mắt' },
          { title: 'Góc nhìn', info: '110 độ' },
          { title: 'Hỗ trợ âm thanh', info: '3D Audio' }
        ]),
        productImage: JSON.stringify("uploads\\product\\PSVR2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-f0c.webp",
          img1: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-9c5.webp",
          img2: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-34d.webp",
          img3: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-82b.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 49,
        name: 'Phần mềm thiết kế đồ họa CorelDRAW 2024',
        productId: 'Corel2024',
        brandId: 2, // Dell
        description: 'Công cụ thiết kế đồ họa mạnh mẽ, phù hợp cho nhà thiết kế chuyên nghiệp.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Digital', price: '6990000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Tiếng Anh' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Corel2024-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 50,
        name: 'Phần mềm văn phòng Microsoft Office 2024',
        productId: 'Office2024',
        brandId: 4, // Microsoft
        description: 'Bộ phần mềm văn phòng phổ biến nhất với tính năng cải tiến.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: 'Home & Student', type: 'Digital', price: '2590000', quantity: '100' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Office2024-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 51,
        name: 'Phần mềm bảo mật Kaspersky Total Security',
        productId: 'KTS2024',
        brandId: 8, // GIGABYTE
        description: 'Giải pháp bảo mật toàn diện dành cho cá nhân và doanh nghiệp.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: '1 Device', type: 'Digital', price: '890000', quantity: '150' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS, Android, iOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\KTS2024-main.jpg"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 52,
        name: 'Chuột gaming Logitech G502 Hero',
        productId: 'G502HERO',
        brandId: 1, // ASUS
        description: 'Chuột gaming hiệu suất cao với cảm biến Hero và độ chính xác tối ưu.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Wired', price: '1490000', quantity: '100' }
        ]),
        specifications: JSON.stringify([
          { title: 'Cảm biến', info: 'Hero 25K' },
          { title: 'Đèn LED', info: 'RGB 16.8 triệu màu' },
          { title: 'Kết nối', info: 'Có dây USB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\G502HERO-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-578.webp",
          img1: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-a16.webp",
          img2: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-fd7.webp",
          img3: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-240.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 53,
        name: 'Chuột không dây Microsoft Surface Mouse',
        productId: 'SURFACEMOUSE',
        brandId: 4, // Microsoft
        description: 'Thiết kế thanh lịch, tối ưu cho trải nghiệm làm việc và giải trí.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { version: 'Bluetooth', type: 'Wireless', price: '890000', quantity: '75' }
        ]),
        specifications: JSON.stringify([
          { title: 'Công nghệ', info: 'Bluetooth 4.0' },
          { title: 'Trọng lượng', info: '90g' },
          { title: 'Pin', info: '2 x AAA, tuổi thọ lên tới 12 tháng' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SURFACEMOUSE-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 54,
        name: 'Chuột gaming Razer DeathAdder V2',
        productId: 'DEATHADDERV2',
        brandId: 7, // Razer
        description: 'Dòng chuột gaming huyền thoại với hiệu suất và thiết kế tối ưu.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Wired', price: '1590000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Cảm biến', info: 'Focus+ Optical' },
          { title: 'DPI tối đa', info: '20000' },
          { title: 'Trọng lượng', info: '82g' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DEATHADDERV2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-477.webp",
          img1: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-d1e.webp",
          img2: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-15f.webp",
          img3: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-59a.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 55,
        name: 'PlayStation 5',
        productId: 'PS5',
        brandId: 8, // GIGABYTE
        description: 'Máy chơi game thế hệ mới với hiệu suất cao và đồ họa vượt trội.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Disk Edition', price: '14990000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: '8x Zen 2 Cores at 3.5GHz' },
          { title: 'GPU', info: '10.28 TFLOPs, RDNA 2 Architecture' },
          { title: 'Storage', info: '825GB SSD' }
        ]),
        productImage: JSON.stringify("uploads\\product\\PS5-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\PlayStation 5-desc-ef0.webp",
          img1: "uploads\\product\\PlayStation 5-desc-05d.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 56,
        name: 'Xbox Series X',
        productId: 'XBOXSERIESX',
        brandId: 4, // Microsoft
        description: 'Cỗ máy chơi game mạnh mẽ nhất từ trước đến nay, trải nghiệm chơi game 4K tuyệt hảo.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Disk Edition', price: '13990000', quantity: '40' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: '8x Zen 2 Cores at 3.8GHz' },
          { title: 'GPU', info: '12 TFLOPs, RDNA 2 Architecture' },
          { title: 'Storage', info: '1TB SSD' }
        ]),
        productImage: JSON.stringify("uploads\\product\\XBOXSERIESX-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Xbox Series X-desc-10c.webp",
          img1: "uploads\\product\\Xbox Series X-desc-e11.webp",
          img2: "uploads\\product\\Xbox Series X-desc-de8.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 57,
        name: 'Nintendo Switch OLED',
        productId: 'SWITCHOLED',
        brandId: 9, // VAIO
        description: 'Phiên bản nâng cấp của Nintendo Switch với màn hình OLED rực rỡ.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Handheld & Docked', price: '9500000', quantity: '60' }
        ]),
        specifications: JSON.stringify([
          { title: 'Màn hình', info: '7-inch OLED' },
          { title: 'Dung lượng pin', info: '4.5 - 9 giờ' },
          { title: 'Bộ nhớ trong', info: '64GB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SWITCHOLED-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 58,
        name: 'VAIO VisionBeam X2',
        productId: 'VBEAMX2',
        brandId: 9, // VAIO
        description: 'Máy chiếu cao cấp với độ phân giải 4K và công nghệ HDR.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { version: 'Deluxe', type: 'Home Cinema', price: '25000000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '4K UHD' },
          { title: 'Độ sáng', info: '3000 Lumens' },
          { title: 'Kết nối', info: 'HDMI, WiFi, Bluetooth' }
        ]),
        productImage: JSON.stringify("uploads\\product\\VBEAMX2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO VisionBeam X2-desc-de7.webp",
          img1: "uploads\\product\\VAIO VisionBeam X2-desc-f0d.webp",
          img2: "uploads\\product\\VAIO VisionBeam X2-desc-0a4.webp",
          img3: "uploads\\product\\VAIO VisionBeam X2-desc-6fe.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 59,
        name: 'ASUS ProBeam Lite',
        productId: 'APBLITE',
        brandId: 1, // ASUS
        description: 'Máy chiếu nhỏ gọn với khả năng trình chiếu sắc nét và dễ di chuyển.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { version: 'Compact', type: 'Portable', price: '12000000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '1080p Full HD' },
          { title: 'Độ sáng', info: '2500 Lumens' },
          { title: 'Kết nối', info: 'HDMI, USB-C' }
        ]),
        productImage: JSON.stringify("uploads\\product\\APBLITE-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\ASUS ProBeam Lite-desc-08a.webp",
          img1: "uploads\\product\\ASUS ProBeam Lite-desc-4d0.webp",
          img2: "uploads\\product\\ASUS ProBeam Lite-desc-7db.webp",
          img3: "uploads\\product\\ASUS ProBeam Lite-desc-aa6.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 60,
        name: 'Lenovo BrightCast P7',
        productId: 'LBCP7',
        brandId: 3, // Lenovo
        description: 'Máy chiếu văn phòng với độ sáng cao và tuổi thọ bóng đèn lâu dài.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { version: 'Professional', type: 'Office', price: '17000000', quantity: '40' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: 'WUXGA (1920x1200)' },
          { title: 'Độ sáng', info: '4000 Lumens' },
          { title: 'Kết nối', info: 'HDMI, VGA, LAN' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LBCP7-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Lenovo BrightCast P7-desc-380.webp",
          img1: "uploads\\product\\Lenovo BrightCast P7-desc-878.webp",
          img2: "uploads\\product\\Lenovo BrightCast P7-desc-bd7.webp",
          img3: "uploads\\product\\Lenovo BrightCast P7-desc-151.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 61,
        name: 'ASUS LockerPro A3',
        productId: 'ALPA3',
        brandId: 1, // ASUS
        description: 'Hộc tủ bảo mật cao dành cho văn phòng hiện đại.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Office', price: '9000000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '600x800x450mm' },
          { title: 'Chất liệu', info: 'Thép không gỉ' },
          { title: 'Tính năng', info: 'Khóa điện tử, chống nước' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ALPA3-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\ASUS LockerPro A3-desc-bb0.webp",
          img1: "uploads\\product\\ASUS LockerPro A3-desc-c92.webp",
          img2: "uploads\\product\\ASUS LockerPro A3-desc-255.webp",
          img3: "uploads\\product\\ASUS LockerPro A3-desc-cfa.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 62,
        name: 'Dell SafeBox D9',
        productId: 'DSBD9',
        brandId: 2, // Dell
        description: 'Hộc tủ văn phòng bền bỉ với không gian lưu trữ rộng.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { version: 'Premium', type: 'Office', price: '12000000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '700x900x500mm' },
          { title: 'Chất liệu', info: 'Gỗ ép cao cấp' },
          { title: 'Tính năng', info: 'Khóa từ, ngăn chống trộm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DSBD9-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell SafeBox D9-desc-d65.webp",
          img1: "uploads\\product\\Dell SafeBox D9-desc-ffd.webp",
          img2: "uploads\\product\\Dell SafeBox D9-desc-b6d.webp",
          img3: "uploads\\product\\Dell SafeBox D9-desc-e20.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 63,
        name: 'Acer SecureVault S2',
        productId: 'ACSVS2',
        brandId: 6, // Acer
        description: 'Hộc tủ thông minh với thiết kế hiện đại và công nghệ tiên tiến.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { version: 'Advanced', type: 'Office', price: '14000000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '800x1000x600mm' },
          { title: 'Chất liệu', info: 'Nhôm hợp kim' },
          { title: 'Tính năng', info: 'Cảm biến vân tay, bảo vệ RFID' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ACSVS2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer SecureVault S2-desc-174.webp",
          img1: "uploads\\product\\Acer SecureVault S2-desc-662.webp",
          img2: "uploads\\product\\Acer SecureVault S2-desc-220.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 64,
        name: 'Dell LaptopStand Flex',
        productId: 'DLFS1',
        brandId: 2, // Dell
        description: 'Giá đỡ laptop với thiết kế gọn nhẹ, dễ dàng điều chỉnh để phù hợp với nhiều góc nhìn.',
        tagName: 'LAPTOP_STAND',
        variants: JSON.stringify([
          { version: 'Basic', type: 'Home', price: '6000000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '350x250x50mm' },
          { title: 'Chất liệu', info: 'Hợp kim nhôm' },
          { title: 'Tính năng', info: 'Điều chỉnh góc độ, chống trượt' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DLFS1-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell LaptopStand Flex-desc-d0d.webp",
          img1: "uploads\\product\\Dell LaptopStand Flex-desc-ea0.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 65,
        name: 'Lenovo TabletStand Pro',
        productId: 'LTS1',
        brandId: 3, // Lenovo
        description: 'Giá đỡ tablet chuyên nghiệp với thiết kế chắc chắn, hỗ trợ đa thiết bị.',
        tagName: 'TABLET_STAND',
        variants: JSON.stringify([
          { version: 'Premium', type: 'Office', price: '8000000', quantity: '12' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '200x150x40mm' },
          { title: 'Chất liệu', info: 'Hợp kim thép' },
          { title: 'Tính năng', info: 'Chống rung, xoay 360 độ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LTS1-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Lenovo TabletStand Pro-desc-69f.webp",
          img1: "uploads\\product\\Lenovo TabletStand Pro-desc-6ed.webp",
          img2: "uploads\\product\\Lenovo TabletStand Pro-desc-dd6.webp",
          img3: "uploads\\product\\Lenovo TabletStand Pro-desc-22c.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 66,
        name: 'Razer BladeStand V2',
        productId: 'RZBS2',
        brandId: 7, // Razer
        description: 'Giá đỡ laptop tối ưu cho gaming, thiết kế mạnh mẽ, phù hợp với game thủ chuyên nghiệp.',
        tagName: 'LAPTOP_STAND',
        variants: JSON.stringify([
          { version: 'Gaming', type: 'Pro', price: '9500000', quantity: '8' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '400x300x60mm' },
          { title: 'Chất liệu', info: 'Kim loại cao cấp' },
          { title: 'Tính năng', info: 'Hệ thống tản nhiệt, đèn LED RGB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\RZBS2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer BladeStand V2-desc-25d.webp",
          img1: "uploads\\product\\Razer BladeStand V2-desc-07c.webp",
          img2: "uploads\\product\\Razer BladeStand V2-desc-c75.webp",
          img3: "uploads\\product\\Razer BladeStand V2-desc-9d6.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
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
      },
      {
        productId: 37, 
        categoryId: 6,
      },
      {
        productId: 38, 
        categoryId: 6,
      },
      {
        productId: 39, 
        categoryId: 6,
      },
      {
        productId: 40, 
        categoryId: 7,
      },
      {
        productId: 41, 
        categoryId: 7,
      },
      {
        productId: 42, 
        categoryId: 7,
      },
      {
        productId: 43, 
        categoryId: 8,
      },
      {
        productId: 44, 
        categoryId: 8,
      },
      {
        productId: 45, 
        categoryId: 8,
      },
      {
        productId: 46, 
        categoryId: 9,
      },
      {
        productId: 47, 
        categoryId: 9,
      },
      {
        productId: 48, 
        categoryId: 9,
      },
      {
        productId: 49, 
        categoryId: 10,
      },
      {
        productId: 50, 
        categoryId: 10,
      },
      {
        productId: 51, 
        categoryId: 10,
      },
      {
        productId: 52, 
        categoryId: 11,
      },
      {
        productId: 53, 
        categoryId: 11,
      },
      {
        productId: 54, 
        categoryId: 11,
      },
      {
        productId: 55, 
        categoryId: 12,
      },
      {
        productId: 56, 
        categoryId: 12,
      },
      {
        productId: 57, 
        categoryId: 12,
      },
      {
        productId: 58, 
        categoryId: 13,
      },
      {
        productId: 59, 
        categoryId: 13,
      },
      {
        productId: 60, 
        categoryId: 13,
      },
      {
        productId: 61, 
        categoryId: 14,
      },
      {
        productId: 62, 
        categoryId: 14,
      },
      {
        productId: 63, 
        categoryId: 14,
      },
      {
        productId: 46, 
        categoryId: 15,
      },
      {
        productId: 47, 
        categoryId: 15,
      },
      {
        productId: 48, 
        categoryId: 15,
      },
      {
        productId: 64, 
        categoryId: 16,
      },
      {
        productId: 65, 
        categoryId: 16,
      },
      {
        productId: 66, 
        categoryId: 16,
      },
    ]);

    console.log('Seed dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
  }
};


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
//         name: 'Lenovo ThinkPad T14s Gen 2 (Intel)',
//         productId: 'T14sG2i09NU',
//         brandId: 3, 
//         description: '',
//         tagName: 'THINKPAD BỀN BỈ - ỔN ĐỊNH',
//         variants: JSON.stringify([
//           { color: 'đen', version: '2024', type: 'Chính hãng', price: '13290000', quantity: '56' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i7 1185G7, 4C/8T' },
//           { title: 'Tốc độ', info: '1.2GHz , Lên tới' },
//           { title: 'Bộ nhớ đệm', info: '12MB' },
//           { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
//           { title: 'Card rời', info: 'Không' },
//           { title: 'Dung lượng', info: '32GB LPDDR4 4266MHz' },
//           { title: 'Hỗ trợ tối đa', info: '32GB (Không thể nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '256 GB (M.2 NVMe)' },
//         ]),
//         productImage: JSON.stringify("uploads/product/T14sG2i09NU-main.png"),
//         imageUrl: JSON.stringify({
//           img0: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-ab5.png',
//           img1: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-619.png',
//           img2: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-aec.png',
//           img3: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-094.png',
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "ASUS ROG Zephyrus G14",
//         productId: "ROGG142024",
//         brandId: 1,
//         description: "",
//         tagName: "HIỆU NĂNG CAO CHO GAME THỦ",
//         variants: JSON.stringify([
//           { color: "trắng", version: "2024", type: "Chính hãng", price: "42000000", quantity: "30" }
//         ]),
//         specifications: JSON.stringify([
//           { title: "CPU", info: "AMD Ryzen 9 5900HS, 8C/16T" },
//           { title: "Tốc độ", info: "3.0GHz , Lên tới 4.6GHz" },
//           { title: "Bộ nhớ đệm", info: "16MB" },
//           { title: "Card onboard", info: "AMD Radeon Graphics" },
//           { title: "Card rời", info: "NVIDIA GeForce RTX 3060" },
//           { title: "Dung lượng", info: "16GB DDR4 3200MHz" },
//           { title: "Hỗ trợ tối đa", info: "32GB" },
//           { title: "Dung lượng SSD", info: "1TB (M.2 NVMe)" }
//         ]),
//         productImage: JSON.stringify("uploads/product/ROGG142024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads/product/ASUS ROG Zephyrus G14-desc-2bf.webp",
//           img1: "uploads/product/ASUS ROG Zephyrus G14-desc-1af.webp",
//           img2: "uploads/product/ASUS ROG Zephyrus G14-desc-274.webp",
//           img3: "uploads/product/ASUS ROG Zephyrus G14-desc-3d4.webp",
//           img4: "uploads/product/ASUS ROG Zephyrus G14-desc-8cc.webp"

//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: "Dell XPS 15 9520",
//         productId: "XPS159520",
//         brandId: 2,
//         description: "",
//         tagName: "THIẾT KẾ CAO CẤP - HIỆU SUẤT MẠNH MẼ",
//         variants: JSON.stringify([
//           { color: "bạc", version: "2024", type: "Chính hãng", price: "52000000", quantity: "20" }
//         ]),
//         specifications: JSON.stringify([
//           { title: "CPU", info: "Intel Core i9 12900H, 14C/20T" },
//           { title: "Tốc độ", info: "2.5GHz , Lên tới 5.0GHz" },
//           { title: "Bộ nhớ đệm", info: "24MB" },
//           { title: "Card onboard", info: "Intel UHD Graphics" },
//           { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
//           { title: "Dung lượng", info: "32GB DDR5 4800MHz" },
//           { title: "Hỗ trợ tối đa", info: "64GB" },
//           { title: "Dung lượng SSD", info: "2TB (M.2 NVMe)" }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\XPS159520-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Dell XPS 15 9520-desc-bb4.webp",
//           img1: "uploads\\product\\Dell XPS 15 9520-desc-901.webp",
//           img2: "uploads\\product\\Dell XPS 15 9520-desc-4ac.webp",
//           img3: "uploads\\product\\Dell XPS 15 9520-desc-23f.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: "Microsoft Surface Laptop Studio",
//         productId: "SurfaceLS2024",
//         brandId: 4,
//         description: "",
//         tagName: "LINH HOẠT VÀ SÁNG TẠO",
//         variants: JSON.stringify([
//           { color: "bạc", version: "2024", type: "Chính hãng", price: "48000000", quantity: "15" }
//         ]),
//         specifications: JSON.stringify([
//           { title: "CPU", info: "Intel Core i7 11370H, 4C/8T" },
//           { title: "Tốc độ", info: "3.3GHz , Lên tới 4.8GHz" },
//           { title: "Bộ nhớ đệm", info: "12MB" },
//           { title: "Card onboard", info: "Intel Iris Xe Graphics" },
//           { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
//           { title: "Dung lượng", info: "16GB LPDDR4x" },
//           { title: "Hỗ trợ tối đa", info: "16GB" },
//           { title: "Dung lượng SSD", info: "512GB (M.2 NVMe)" }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\SurfaceLS2024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Microsoft Surface Laptop Studio-desc-a5a.webp",
//           img1: "uploads\\product\\Microsoft Surface Laptop Studio-desc-5fa.webp",
//           img2: "uploads\\product\\Microsoft Surface Laptop Studio-desc-c85.webp",
//           img3: "uploads\\product\\Microsoft Surface Laptop Studio-desc-7df.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'MSI Prestige 14',
//         productId: 'Prestige142024',
//         brandId: 5,
//         description: '',
//         tagName: 'HIỆU NĂNG CAO - THIẾT KẾ ĐẸP',
//         variants: JSON.stringify([
//           { color: 'trắng', version: '2024', type: 'Chính hãng', price: '17490000', quantity: '30' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
//           { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.4GHz' },
//           { title: 'Bộ nhớ đệm', info: '12MB' },
//           { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
//           { title: 'Card rời', info: 'Không' },
//           { title: 'Dung lượng', info: '16GB LPDDR4X 4266MHz' },
//           { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Prestige142024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\MSI Prestige 14-desc-a66.webp",
//           img1: "uploads\\product\\MSI Prestige 14-desc-1d7.webp",
//           img2: "uploads\\product\\MSI Prestige 14-desc-253.webp",
//           img3: "uploads\\product\\MSI Prestige 14-desc-947.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Acer Aspire 7',
//         productId: 'Aspire72024',
//         brandId: 6,
//         description: '',
//         tagName: 'HIỆU SUẤT CAO - GIÁ HỢP LÝ',
//         variants: JSON.stringify([
//           { color: 'đen', version: '2024', type: 'Chính hãng', price: '15990000', quantity: '50' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'AMD Ryzen 5 5600H, 6C/12T' },
//           { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.2GHz' },
//           { title: 'Bộ nhớ đệm', info: '19MB' },
//           { title: 'Card onboard', info: 'AMD Radeon Graphics' },
//           { title: 'Card rời', info: 'NVIDIA GTX 1650' },
//           { title: 'Dung lượng', info: '8GB DDR4 3200MHz' },
//           { title: 'Hỗ trợ tối đa', info: '32GB' },
//           { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Aspire72024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Acer Aspire 7-desc-95f.webp",
//           img1: "uploads\\product\\Acer Aspire 7-desc-5ea.webp",
//           img2: "uploads\\product\\Acer Aspire 7-desc-647.webp",
//           img3: "uploads\\product\\Acer Aspire 7-desc-97e.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Razer Blade 14',
//         productId: 'Blade142024',
//         brandId: 7,
//         description: '',
//         tagName: 'CÔNG NGHỆ TIÊN PHONG',
//         variants: JSON.stringify([
//           { color: 'đen', version: '2024', type: 'Chính hãng', price: '41990000', quantity: '20' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'AMD Ryzen 9 5900HX, 8C/16T' },
//           { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.6GHz' },
//           { title: 'Bộ nhớ đệm', info: '20MB' },
//           { title: 'Card onboard', info: 'Không' },
//           { title: 'Card rời', info: 'NVIDIA RTX 3080' },
//           { title: 'Dung lượng', info: '16GB DDR4 3200MHz' },
//           { title: 'Hỗ trợ tối đa', info: '64GB' },
//           { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Blade142024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Razer Blade 14-desc-514.webp",
//           img1: "uploads\\product\\Razer Blade 14-desc-5bb.webp",
//           img2: "uploads\\product\\Razer Blade 14-desc-d2d.webp",
//           img3: "uploads\\product\\Razer Blade 14-desc-ca4.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'GIGABYTE Aero 15',
//         productId: 'Aero152024',
//         brandId: 8,
//         description: '',
//         tagName: 'ĐA PHƯƠNG TIỆN - SÁNG TẠO',
//         variants: JSON.stringify([
//           { color: 'bạc', version: '2024', type: 'Chính hãng', price: '32990000', quantity: '25' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i9 12900HK, 14C/20T' },
//           { title: 'Tốc độ', info: '3.8GHz, Lên tới 5.0GHz' },
//           { title: 'Bộ nhớ đệm', info: '30MB' },
//           { title: 'Card onboard', info: 'Không' },
//           { title: 'Card rời', info: 'NVIDIA RTX 3070 Ti' },
//           { title: 'Dung lượng', info: '32GB DDR5 4800MHz' },
//           { title: 'Hỗ trợ tối đa', info: '64GB' },
//           { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Aero152024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\GIGABYTE Aero 15-desc-8c4.webp",
//           img1: "uploads\\product\\GIGABYTE Aero 15-desc-e83.webp",
//           img2: "uploads\\product\\GIGABYTE Aero 15-desc-832.webp",
//           img3: "uploads\\product\\GIGABYTE Aero 15-desc-c27.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Dell XPS 13 Plus (2024)',
//         productId: 'XPS13Plus2024',
//         brandId: 2, 
//         description: '',
//         tagName: 'HIỆU SUẤT CAO - SÁNG TẠO TỐT',
//         variants: JSON.stringify([
//           { color: 'bạc', version: '2024', type: 'Chính hãng', price: '29990000', quantity: '34' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i7 1360P, 12C/16T' },
//           { title: 'Tốc độ', info: '1.8GHz, Lên tới 5.0GHz' },
//           { title: 'Bộ nhớ đệm', info: '18MB' },
//           { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
//           { title: 'Card rời', info: 'Không' },
//           { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
//           { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe)' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\XPS13Plus2024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-d8b.webp",
//           img1: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-718.webp",
//           img2: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-1ca.webp",
//           img3: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-4d2.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'MSI Stealth 16 Studio A13V',
//         productId: 'Stealth16A13V',
//         brandId: 5, 
//         description: '',
//         tagName: 'GAMING ĐỈNH CAO - ĐẲNG CẤP',
//         variants: JSON.stringify([
//           { color: 'đen', version: '2024', type: 'Chính hãng', price: '45990000', quantity: '20' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i9 13900H, 14C/20T' },
//           { title: 'Tốc độ', info: '2.6GHz, Lên tới 5.4GHz' },
//           { title: 'Bộ nhớ đệm', info: '24MB' },
//           { title: 'Card onboard', info: 'Không' },
//           { title: 'Card rời', info: 'NVIDIA GeForce RTX 4070 8GB' },
//           { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
//           { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '2TB (M.2 NVMe PCIe Gen 4)' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Stealth16A13V-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-3ea.webp",
//           img1: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-b84.webp",
//           img2: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-dd5.webp",
//           img3: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-1d6.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Acer Swift 5 (2024)',
//         productId: 'Swift52024',
//         brandId: 6,
//         description: '',
//         tagName: 'NHẸ NHÀNG - MẠNH MẼ',
//         variants: JSON.stringify([
//           { color: 'xám', version: '2024', type: 'Chính hãng', price: '18990000', quantity: '40' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i7 1365U, 10C/12T' },
//           { title: 'Tốc độ', info: '2.0GHz, Lên tới 4.9GHz' },
//           { title: 'Bộ nhớ đệm', info: '12MB' },
//           { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
//           { title: 'Card rời', info: 'Không' },
//           { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
//           { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 4)' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Swift52024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Acer Swift 5 (2024)-desc-0e3.webp",
//           img1: "uploads\\product\\Acer Swift 5 (2024)-desc-cbf.webp",
//           img2: "uploads\\product\\Acer Swift 5 (2024)-desc-d46.webp",
//           img3: "uploads\\product\\Acer Swift 5 (2024)-desc-431.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'VAIO SX12 (2024)',
//         productId: 'SX122024',
//         brandId: 9, 
//         description: '',
//         tagName: 'MỎNG NHẸ - HIỆU SUẤT CAO',
//         variants: JSON.stringify([
//           { color: 'bạc', version: '2024', type: 'Chính hãng', price: '23990000', quantity: '27' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
//           { title: 'Tốc độ', info: '1.8GHz, Lên tới 4.4GHz' },
//           { title: 'Bộ nhớ đệm', info: '12MB' },
//           { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
//           { title: 'Card rời', info: 'Không' },
//           { title: 'Dung lượng', info: '8GB LPDDR4x 4266MHz' },
//           { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 3)' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\SX122024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\VAIO SX12 (2024)-desc-4b9.webp",
//           img1: "uploads\\product\\VAIO SX12 (2024)-desc-53f.webp",
//           img2: "uploads\\product\\VAIO SX12 (2024)-desc-b14.webp",
//           img3: "uploads\\product\\VAIO SX12 (2024)-desc-282.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Razer Blade 15 (2024)',
//         productId: 'Blade152024',
//         brandId: 7, 
//         description: '',
//         tagName: 'GAMING CAO CẤP - ĐỘ BỀN CAO',
//         variants: JSON.stringify([
//           { color: 'đen', version: '2024', type: 'Chính hãng', price: '43990000', quantity: '15' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: 'Intel Core i7 13700H, 14C/20T' },
//           { title: 'Tốc độ', info: '2.2GHz, Lên tới 5.0GHz' },
//           { title: 'Bộ nhớ đệm', info: '24MB' },
//           { title: 'Card onboard', info: 'Không' },
//           { title: 'Card rời', info: 'NVIDIA GeForce RTX 4080 12GB' },
//           { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
//           { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
//           { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe PCIe Gen 4)' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Blade152024-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Razer Blade 15 (2024)-desc-2c8.webp",
//           img1: "uploads\\product\\Razer Blade 15 (2024)-desc-23c.webp",
//           img2: "uploads\\product\\Razer Blade 15 (2024)-desc-6fc.webp",
//           img3: "uploads\\product\\Razer Blade 15 (2024)-desc-28a.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Công Thái Học GAMI Crom',
//         productId: 'GMCROM01CF',
//         brandId: 5, 
//         description: '',
//         tagName: 'VỮNG TƯ THẾ VỮNG TƯƠNG LAI',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '15' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '10' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Khung lưng', info: 'Lưng trên có thể chỉnh lên xuống 5cm Phần cụm đỡ lưng dưới thiết kế 2 mảnh cánh bướm Butterfit 2D + cụm 4 lò xo ôm trọn phần thắt lưng' },
//           { title: 'Chân ghế', info: 'Chân hợp kim nhôm bền bỉ chống rỉ' },
//           { title: 'Tựa đầu', info: 'HeadFlex 8D thông minh' },
//           { title: 'Bệ tỳ tay', info: 'Xoay360 độ giúp đỡ khủy tay tốt nhất' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Cơ chế kháng lực Tension Control linh hoạt + Trụ thủy lực WITHUS Class 4. Multi Button bằng nút, Ngả lưng lên tới 4 cấp, giữ khóa ngả ở mỗi cấp' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GMCROM01CF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-61a.webp",
//           img1: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-017.webp",
//           img2: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-f0b.webp",
//           img3: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-6f2.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Ergonomic ASUS',
//         productId: 'GASER01',
//         brandId: 1,
//         description: '',
//         tagName: 'Thiết Kế Tinh Tế, Tối Ưu Công Năng',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '10' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '8' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Khung lưng', info: 'Khung kim loại chắc chắn, có thể điều chỉnh độ cao' },
//           { title: 'Chân ghế', info: 'Chân nhôm bền bỉ chống rỉ sét' },
//           { title: 'Tựa đầu', info: 'Tựa đầu Ergonomic điều chỉnh theo nhiều hướng' },
//           { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh thắng lực Tension Control' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GASER01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Ergonomic ASUS-desc-594.webp",
//           img1: "uploads\\product\\Ghế Ergonomic ASUS-desc-c8e.webp",
//           img2: "uploads\\product\\Ghế Ergonomic ASUS-desc-1e8.webp",
//           img3: "uploads\\product\\Ghế Ergonomic ASUS-desc-b37.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Gaming Dell',
//         productId: 'GDEL01',
//         brandId: 2,
//         description: '',
//         tagName: 'Ghế Gaming Siêu Bền, Cực Êm Ái',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '12' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '6' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, chống bám bụi' },
//           { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
//           { title: 'Chân ghế', info: 'Chân nhôm chắc chắn, chịu lực tốt' },
//           { title: 'Tựa đầu', info: 'Tựa đầu thông minh có thể điều chỉnh độ cao' },
//           { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay 3D, điều chỉnh được cả chiều cao và góc nghiêng' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control, thích hợp cho mọi tư thế ngồi' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GDEL01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Gaming Dell-desc-9fd.webp",
//           img1: "uploads\\product\\Ghế Gaming Dell-desc-260.webp",
//           img2: "uploads\\product\\Ghế Gaming Dell-desc-a63.webp",
//           img3: "uploads\\product\\Ghế Gaming Dell-desc-a61.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Văn Phòng Lenovo',
//         productId: 'GLEN01',
//         brandId: 3,
//         description: '',
//         tagName: 'Tinh Tế, Đảm Bảo Sự Thoải Mái',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '20' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '15' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
//           { title: 'Khung lưng', info: 'Khung kim loại chống oxy hóa, điều chỉnh độ cao lưng' },
//           { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
//           { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt theo góc ngồi' },
//           { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh lên xuống, xoay 360 độ' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control với nhiều cấp độ' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GLEN01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-c7d.webp",
//           img1: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-455.webp",
//           img2: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-dd6.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Văn Phòng Microsoft',
//         productId: 'GMIC01',
//         brandId: 4,
//         description: '',
//         tagName: 'Tiện Lợi, Hỗ Trợ Tốt Cho Mọi Tư Thế',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '13' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '10' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
//           { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
//           { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
//           { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh theo chiều cao và độ nghiêng' },
//           { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh Tension Control' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GMIC01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-e64.webp",
//           img1: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-0c4.webp",
//           img2: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-bbd.webp",
//           img3: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-c80.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Ghế Công Thái Học MSI',
//         productId: 'GMSI01',
//         brandId: 5,
//         description: '',
//         tagName: 'Ghế Công Thái Học Cao Cấp',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '10' },
//           { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '8' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
//           { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, dễ vệ sinh' },
//           { title: 'Khung lưng', info: 'Khung kim loại bền chắc, điều chỉnh độ cao' },
//           { title: 'Chân ghế', info: 'Chân hợp kim nhôm chống rỉ sét' },
//           { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt' },
//           { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh theo chiều cao và góc nghiêng' },
//           { title: 'Piston', info: 'Samhongsa Class 4' },
//           { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control đa cấp độ' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GMSI01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Ghế Công Thái Học MSI-desc-883.webp",
//           img1: "uploads\\product\\Ghế Công Thái Học MSI-desc-dd7.webp",
//           img2: "uploads\\product\\Ghế Công Thái Học MSI-desc-cfa.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Monsgeek M1W SP Aluminium CNC',
//         productId: 'FullMonsgeekM1w05NF',
//         brandId: 3,
//         description: '',
//         tagName: 'PHÍM CƠ GIẢM SỐC - TĂNG TỐC CÔNG VIỆC',
//         variants: JSON.stringify([
//           { color: 'Trắng', version: 'M1W V3 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '32' },
//           { color: 'Hồng', version: 'M1W V5 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '29' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'AKKO Piano V3 Pro - Hotswap' },
//           { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
//           { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
//           { title: 'Chất liệu khung', info: 'Nhôm CNC' },
//           { title: 'Số nút bấm', info: '82Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ Custom' },
//           { title: 'Layout', info: '75%' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullMonsgeekM1w05NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-de8.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-705.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-8f3.webp",
//           img3: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-1d6.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Razer BlackWidow V3',
//         productId: 'FullRazerBWV3A01',
//         brandId: 7,
//         description: '',
//         tagName: 'PHÍM CƠ CHẤT LƯỢNG CAO - DÀNH CHO GAME',
//         variants: JSON.stringify([
//           { color: 'Xanh', version: 'V3 SP - Razer Green Switch', type: 'Chính hãng', price: '2490000', quantity: '50' },
//           { color: 'Đen', version: 'V3 SP - Razer Yellow Switch', type: 'Chính hãng', price: '2490000', quantity: '40' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Razer Green/Razer Yellow' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm CNC' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullRazerBWV3A01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-238.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-0ee.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-784.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Logitech G Pro X',
//         productId: 'FullLogitechGProX03',
//         brandId: 6,
//         description: '',
//         tagName: 'PHÍM CƠ DÀNH CHO GAME THỦ - CHUYÊN NGHIỆP',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'G Pro X - Logitech GX Blue Switch', type: 'Chính hãng', price: '2790000', quantity: '35' },
//           { color: 'Đen', version: 'G Pro X - Logitech GX Red Switch', type: 'Chính hãng', price: '2790000', quantity: '25' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Logitech GX Blue/GX Red' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm' },
//           { title: 'Số nút bấm', info: '87 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Tenkeyless' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullLogitechGProX03-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-95e.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-b21.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-63d.webp",
//           img3: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-157.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ SteelSeries Apex Pro',
//         productId: 'FullSteelSeriesApexPro07',
//         brandId: 8,
//         description: '',
//         tagName: 'PHÍM CƠ CAO CẤP - DÀNH CHO GAME VÀ CÔNG VIỆC',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Apex Pro - OmniPoint Switch', type: 'Chính hãng', price: '4990000', quantity: '12' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'OmniPoint Switch' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullSteelSeriesApexPro07-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-178.webp",
//           img1: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-2bc.webp",
//           img2: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-893.webp",
//           img3: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-1ec.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Corsair K95 RGB Platinum',
//         productId: 'FullCorsairK95RGBPlatinum04',
//         brandId: 9,
//         description: '',
//         tagName: 'PHÍM CƠ RGB - ĐỘ BỀN CAO',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'K95 RGB - Cherry MX Speed Switch', type: 'Chính hãng', price: '3990000', quantity: '15' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Cherry MX Speed' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullCorsairK95RGBPlatinum04-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-949.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-bff.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-0ae.webp",
//           img3: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-c4c.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ AKKO 3068B Plus',
//         productId: 'FullAKKO3068BPlus01',
//         brandId: 5,
//         description: '',
//         tagName: 'PHÍM CƠ NHỎ GỌN - MÀU SẮC SÁNG BÓNG',
//         variants: JSON.stringify([
//           { color: 'Trắng', version: '3068B Plus - AKKO Switch', type: 'Chính hãng', price: '1690000', quantity: '60' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'AKKO Switch' },
//           { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
//           { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
//           { title: 'Chất liệu khung', info: 'Nhựa ABS' },
//           { title: 'Số nút bấm', info: '68 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: '65%' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullAKKO3068BPlus01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-af4.webp",
//           img1: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-3e6.webp",
//           img2: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-d72.webp",
//           img3: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-e21.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ ASUS TUF K7',
//         productId: 'FullASUSTUFK702',
//         brandId: 1,
//         description: '',
//         tagName: 'PHÍM CƠ CHỐNG CHƠI GAME - GIẢM MỆT MỎI',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'TUF K7 - ROG RX Optical Switch', type: 'Chính hãng', price: '2890000', quantity: '45' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'ROG RX Optical' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm CNC' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullASUSTUFK702-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-e95.webp",
//           img1: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-9b7.webp",
//           img2: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-472.webp",
//           img3: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-3ca.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Dell Alienware AW510K',
//         productId: 'FullDellAW510K04',
//         brandId: 2,
//         description: '',
//         tagName: 'PHÍM CƠ CHỐNG LỖI NHẤN',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'AW510K - Cherry MX Brown', type: 'Chính hãng', price: '3590000', quantity: '20' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Cherry MX Brown' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullDellAW510K04-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-416.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-17f.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-dbd.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ Microsoft Modern',
//         productId: 'FullMicrosoftModern05',
//         brandId: 4,
//         description: '',
//         tagName: 'PHÍM CƠ NHỎ GỌN DÀNH CHO MÁY TÍNH BÀN',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Modern - Microsoft Custom Switch', type: 'Chính hãng', price: '1990000', quantity: '38' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Microsoft Custom Switch' },
//           { title: 'Kết nối qua:', info: 'Bluetooth/USB C' },
//           { title: 'Loại kết nối', info: 'Không dây/Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhựa ABS' },
//           { title: 'Số nút bấm', info: '80 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: '75%' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullMicrosoftModern05-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fea.webp",
//           img1: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-857.webp",
//           img2: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fd5.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Bàn phím Cơ MSI Vigor GK30',
//         productId: 'FullMSIVigorGK3009',
//         brandId: 5,
//         description: '',
//         tagName: 'PHÍM CƠ BỀN BỈ - ĐẶC BIỆT DÀNH CHO GAME',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'GK30 - Blue Switch', type: 'Chính hãng', price: '1590000', quantity: '60' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Blue Switch' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhựa ABS' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullMSIVigorGK3009-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-d77.webp",
//           img1: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-e43.webp",
//           img2: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-c0d.webp",
//           img3: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-706.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'bàn phím Cơ GIGABYTE AORUS K9',
//         productId: 'FullGigabyteAORUSK904',
//         brandId: 8,
//         description: '',
//         tagName: 'PHÍM CƠ RGB - TỐC ĐỘ CAO',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'K9 - Cherry MX Red', type: 'Chính hãng', price: '3190000', quantity: '30' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Loại switch', info: 'Cherry MX Red' },
//           { title: 'Kết nối qua:', info: 'USB C' },
//           { title: 'Loại kết nối', info: 'Có dây' },
//           { title: 'Chất liệu khung', info: 'Nhôm CNC' },
//           { title: 'Số nút bấm', info: '104 Nút' },
//           { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
//           { title: 'Layout', info: 'Full-size' },
//           { title: 'Tương thích', info: 'Windows/MacOS' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\FullGigabyteAORUSK904-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-a69.webp",
//           img1: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-6b6.webp",
//           img2: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-650.webp",
//           img3: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-e8c.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Loa Razer Willen',
//         productId: 'MarshallWillen01NF',
//         brandId: 7,
//         description: '',
//         tagName: 'MARSHALL SALE TO - LO CHI VỀ GIÁ',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'A2 - MX Black', type: 'Chính hãng', price: '2390000', quantity: '21' },
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều dài', info: '10,05cm' },
//           { title: 'Chiều rộng:', info: '4,04cm' },
//           { title: 'Chiều cao', info: '10,16cm' },
//           { title: 'Trọng lượng', info: '0.8kg' },
//           { title: 'Loại kết nối', info: 'Không dây' },
//           { title: 'Kết nối qua', info: 'Bluetooth' },
//           { title: 'Công nghệ âm thanh', info: 'Wireless Dual (kết nối 2 loa)' },
//           { title: 'Tổng công suất', info: '10W' },
//         ]),
//         productImage: JSON.stringify("uploads\\product\\MarshallWillen01NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Loa Razer Willen-desc-d29.webp",
//           img1: "uploads\\product\\Loa Razer Willen-desc-9ba.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: 'Loa JBL Flip 5',
//         productId: 'JBLFlip5NF',
//         brandId: 1,
//         description: '',
//         tagName: 'SALE JBL LOA BLUETOOTH',
//         variants: JSON.stringify([
//           { color: 'Xanh dương', version: 'JBL Flip 5', type: 'Chính hãng', price: '2990000', quantity: '15' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều dài', info: '18,4cm' },
//           { title: 'Chiều rộng:', info: '6,9cm' },
//           { title: 'Chiều cao', info: '5,3cm' },
//           { title: 'Trọng lượng', info: '0.96kg' },
//           { title: 'Loại kết nối', info: 'Không dây' },
//           { title: 'Kết nối qua', info: 'Bluetooth' },
//           { title: 'Công nghệ âm thanh', info: 'Bass Radiator' },
//           { title: 'Tổng công suất', info: '20W' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\JBLFlip5NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Loa JBL Flip 5-desc-dc1.webp",
//           img1: "uploads\\product\\Loa JBL Flip 5-desc-02f.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Loa Sony SRS-XB12',
//         productId: 'SonySRSXB12NF',
//         brandId: 2,
//         description: '',
//         tagName: 'SALE LOA SONY',
//         variants: JSON.stringify([
//           { color: 'Đỏ', version: 'SRS-XB12', type: 'Chính hãng', price: '1690000', quantity: '25' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều dài', info: '9,5cm' },
//           { title: 'Chiều rộng:', info: '9,5cm' },
//           { title: 'Chiều cao', info: '9,5cm' },
//           { title: 'Trọng lượng', info: '0.25kg' },
//           { title: 'Loại kết nối', info: 'Không dây' },
//           { title: 'Kết nối qua', info: 'Bluetooth' },
//           { title: 'Công nghệ âm thanh', info: 'Extra Bass' },
//           { title: 'Tổng công suất', info: '5W' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\SonySRSXB12NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Loa Sony SRS-XB12-desc-c6e.webp",
//           img1: "uploads\\product\\Loa Sony SRS-XB12-desc-440.webp",
//           img2: "uploads\\product\\Loa Sony SRS-XB12-desc-1cf.webp",
//           img3: "uploads\\product\\Loa Sony SRS-XB12-desc-872.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Loa Bose SoundLink Revolve+',
//         productId: 'BoseSoundLinkRevolve+01NF',
//         brandId: 4,
//         description: '',
//         tagName: 'SALE LOA BOSE',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'SoundLink Revolve+', type: 'Chính hãng', price: '7490000', quantity: '10' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều dài', info: '18,4cm' },
//           { title: 'Chiều rộng:', info: '10,5cm' },
//           { title: 'Chiều cao', info: '18,4cm' },
//           { title: 'Trọng lượng', info: '1.5kg' },
//           { title: 'Loại kết nối', info: 'Không dây' },
//           { title: 'Kết nối qua', info: 'Bluetooth' },
//           { title: 'Công nghệ âm thanh', info: '360° Sound' },
//           { title: 'Tổng công suất', info: '30W' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\BoseSoundLinkRevolve+01NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-cd8.webp",
//           img1: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-d3d.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Loa Ultimate Ears Wonderboom 2',
//         productId: 'UEWonderboom2NF',
//         brandId: 5,
//         description: '',
//         tagName: 'SALE LOA UE',
//         variants: JSON.stringify([
//           { color: 'Xanh dương', version: 'Wonderboom 2', type: 'Chính hãng', price: '2890000', quantity: '18' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều dài', info: '10cm' },
//           { title: 'Chiều rộng:', info: '10cm' },
//           { title: 'Chiều cao', info: '10cm' },
//           { title: 'Trọng lượng', info: '0.5kg' },
//           { title: 'Loại kết nối', info: 'Không dây' },
//           { title: 'Kết nối qua', info: 'Bluetooth' },
//           { title: 'Công nghệ âm thanh', info: '360° Sound' },
//           { title: 'Tổng công suất', info: '20W' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\UEWonderboom2NF-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-861.webp",
//           img1: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-a2b.webp",
//           img2: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-5c5.webp",
//           img3: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-9db.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'VAIO Gram +View 2023',
//         productId: 'GramView2301CO',
//         brandId: 9,
//         description: '',
//         tagName: 'SALE LOA UE',
//         variants: JSON.stringify([
//           { color: 'Bạc', version: 'Wo2 simple', type: 'Chính hãng', price: '9890000', quantity: '5' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước có chân đế', info: '36cm 24.55cm 0.83cm' },
//           { title: 'Trọng lượng:', info: '0.66kg' },
//           { title: 'Kích thước màn hình', info: '16' },
//           { title: 'Độ phân giải', info: '2560 x 1600' },
//           { title: 'Tỷ lệ màn hình', info: '16:10' },
//           { title: 'Lớp phủ bề mặt', info: 'Chống chói' },
//           { title: 'Tấm nền', info: 'IPS' },
//           { title: 'Tần số quét', info: '60Hz' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\GramView2301CO-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\VAIO Gram +View 2023-desc-37e.webp",
//           img1: "uploads\\product\\VAIO Gram +View 2023-desc-2c9.webp",
//           img2: "uploads\\product\\VAIO Gram +View 2023-desc-33e.webp",
//           img3: "uploads\\product\\VAIO Gram +View 2023-desc-3a7.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Balo ASUS Rog Strix',
//         productId: 'RogBag2302BL',
//         brandId: 1,
//         description: '',
//         tagName: 'SALE BALO GAMING',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Pro Gaming', type: 'Chính hãng', price: '1990000', quantity: '10' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu', info: 'Vải chống nước' },
//           { title: 'Kích thước', info: '50cm x 32cm x 18cm' },
//           { title: 'Trọng lượng', info: '1.2kg' },
//           { title: 'Dung tích', info: '25L' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\RogBag2302BL-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Balo ASUS Rog Strix-desc-20e.webp",
//           img1: "uploads\\product\\Balo ASUS Rog Strix-desc-de0.webp",
//           img2: "uploads\\product\\Balo ASUS Rog Strix-desc-1bf.webp",
//           img3: "uploads\\product\\Balo ASUS Rog Strix-desc-83a.webp" 
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Túi Lenovo ThinkPad X1',
//         productId: 'ThinkPadX1Case01',
//         brandId: 3,
//         description: '',
//         tagName: 'SALE TÚI LAPTOP',
//         variants: JSON.stringify([
//           { color: 'Xám', version: 'Classic', type: 'Chính hãng', price: '1390000', quantity: '20' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu', info: 'Polyester' },
//           { title: 'Kích thước', info: '40cm x 30cm x 8cm' },
//           { title: 'Trọng lượng', info: '0.9kg' },
//           { title: 'Dung tích', info: '15L' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\ThinkPadX1Case01-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-c0a.webp",
//           img1: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-bed.webp",
//           img2: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-2a1.webp",
//           img3: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-3c3.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Balo Dell XPS Travel',
//         productId: 'XPSBagTravel2023',
//         brandId: 2,
//         description: '',
//         tagName: 'GIẢM GIÁ PHỤ KIỆN',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Business', type: 'Chính hãng', price: '1590000', quantity: '15' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chất liệu', info: 'Canvas chống nước' },
//           { title: 'Kích thước', info: '45cm x 28cm x 15cm' },
//           { title: 'Trọng lượng', info: '1kg' },
//           { title: 'Dung tích', info: '20L' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\XPSBagTravel2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Balo Dell XPS Travel-desc-25f.webp",
//           img1: "uploads\\product\\Balo Dell XPS Travel-desc-479.webp",
//           img2: "uploads\\product\\Balo Dell XPS Travel-desc-1df.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Bàn nâng hạ ASUS ProDesk',
//         productId: 'ASUSDeskLift2023',
//         brandId: 1, // ASUS
//         description: 'Bàn nâng hạ chuyên dụng cho làm việc và học tập.',
//         tagName: 'GIẢM GIÁ THIẾT BỊ',
//         variants: JSON.stringify([
//           { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5290000', quantity: '10' },
//           { color: 'Đen', version: 'Premium', type: 'Chính hãng', price: '6290000', quantity: '8' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước mặt bàn', info: '120cm x 60cm' },
//           { title: 'Tải trọng tối đa', info: '80kg' },
//           { title: 'Chất liệu', info: 'Gỗ MDF và khung thép' },
//           { title: 'Điều chỉnh độ cao', info: '70cm - 120cm' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\ASUSDeskLift2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-b0e.webp",
//           img1: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-da4.webp",
//           img2: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-4cc.webp",
//           img3: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-784.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Bàn nâng hạ Dell ProLift',
//         productId: 'DellDeskLift2023',
//         brandId: 2, // Dell
//         description: 'Bàn nâng hạ bền bỉ, phù hợp với mọi không gian.',
//         tagName: 'GIẢM GIÁ THIẾT BỊ',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Basic', type: 'Chính hãng', price: '4990000', quantity: '12' },
//           { color: 'Xám', version: 'Advanced', type: 'Chính hãng', price: '5990000', quantity: '9' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước mặt bàn', info: '140cm x 70cm' },
//           { title: 'Tải trọng tối đa', info: '100kg' },
//           { title: 'Chất liệu', info: 'Gỗ công nghiệp phủ Melamine' },
//           { title: 'Điều chỉnh độ cao', info: '65cm - 115cm' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\DellDeskLift2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-82b.webp",
//           img1: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-5e0.webp",
//           img2: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-e04.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Bàn nâng hạ Lenovo FlexLift',
//         productId: 'LenovoDeskLift2023',
//         brandId: 3, // Lenovo
//         description: 'Thiết kế hiện đại, đa năng, giúp tối ưu không gian làm việc.',
//         tagName: 'GIẢM GIÁ THIẾT BỊ',
//         variants: JSON.stringify([
//           { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5490000', quantity: '10' },
//           { color: 'Đen', version: 'Deluxe', type: 'Chính hãng', price: '6490000', quantity: '7' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước mặt bàn', info: '160cm x 80cm' },
//           { title: 'Tải trọng tối đa', info: '120kg' },
//           { title: 'Chất liệu', info: 'Gỗ Plywood và khung hợp kim nhôm' },
//           { title: 'Điều chỉnh độ cao', info: '60cm - 125cm' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\LenovoDeskLift2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-aad.webp",
//           img1: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-8c7.webp",
//           img2: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-ed1.webp",
//           img3: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-eeb.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Sạc nhanh Dell PowerCharge',
//         productId: 'DellCharger2023',
//         brandId: 2, // Dell
//         description: 'Sạc nhanh và an toàn cho các thiết bị của bạn.',
//         tagName: 'PHỤ KIỆN SẠC',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Type-C', type: 'Chính hãng', price: '990000', quantity: '25' },
//           { color: 'Trắng', version: 'USB-A', type: 'Chính hãng', price: '890000', quantity: '20' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Công suất', info: '65W' },
//           { title: 'Loại cổng', info: 'Type-C, USB-A' },
//           { title: 'Bảo hành', info: '12 tháng' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\DellCharger2023-main.webp"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Kệ màn hình ASUS MonitorStand Pro',
//         productId: 'ASUSMonitorStand2023',
//         brandId: 1, // ASUS
//         description: 'Kệ màn hình chắc chắn, hỗ trợ công thái học tối ưu.',
//         tagName: 'PHỤ KIỆN VĂN PHÒNG',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '1290000', quantity: '15' },
//           { color: 'Xám', version: 'Premium', type: 'Chính hãng', price: '1590000', quantity: '10' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '60cm x 20cm x 10cm' },
//           { title: 'Tải trọng', info: '20kg' },
//           { title: 'Chất liệu', info: 'Hợp kim nhôm' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\ASUSMonitorStand2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-174.webp",
//           img1: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-f5e.webp",
//           img2: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-216.webp",
//           img3: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-5fa.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Giá đỡ tai nghe MSI SoundStand',
//         productId: 'MSISoundStand2023',
//         brandId: 5, // MSI
//         description: 'Giá đỡ tai nghe tiện dụng, phong cách.',
//         tagName: 'PHỤ KIỆN ÂM THANH',
//         variants: JSON.stringify([
//           { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '590000', quantity: '30' },
//           { color: 'Đỏ', version: 'Gaming', type: 'Chính hãng', price: '690000', quantity: '25' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Chiều cao', info: '25cm' },
//           { title: 'Chất liệu', info: 'Nhựa ABS cao cấp' },
//           { title: 'Khối lượng', info: '0.5kg' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\MSISoundStand2023-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-91c.webp",
//           img1: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-d36.webp",
//           img2: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-233.webp",
//           img3: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-1be.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Kính thực tế ảo Oculus Quest 2',
//         productId: 'OculusQuest2',
//         brandId: 7, // Razer
//         description: 'Kính thực tế ảo thế hệ mới với hiệu suất mạnh mẽ và chất lượng hình ảnh đỉnh cao.',
//         tagName: 'THỰC TẾ ẢO',
//         variants: JSON.stringify([
//           { storage: '128GB', version: 'Standard', type: 'Chính hãng', price: '8500000', quantity: '20' },
//           { storage: '256GB', version: 'Pro', type: 'Chính hãng', price: '10500000', quantity: '15' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Trọng lượng', info: '503g' },
//           { title: 'Thời lượng pin', info: '2-3 giờ' },
//           { title: 'Độ phân giải', info: '1832x1920 mỗi mắt' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\OculusQuest2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-a89.webp",
//           img1: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-9ad.webp",
//           img2: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-b60.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Kính thực tế ảo HTC Vive Pro 2',
//         productId: 'HTCVivePro2',
//         brandId: 6, // Acer
//         description: 'HTC Vive Pro 2 mang đến trải nghiệm VR chất lượng cao với thiết kế thoải mái và hiệu năng mạnh mẽ.',
//         tagName: 'THỰC TẾ ẢO',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Chính hãng', price: '24000000', quantity: '10' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Độ phân giải', info: '4896x2448' },
//           { title: 'Tần số quét', info: '120Hz' },
//           { title: 'Hệ điều hành hỗ trợ', info: 'Windows 10' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\HTCVivePro2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-458.webp",
//           img1: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-060.webp",
//           img2: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-1cc.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Kính thực tế ảo PlayStation VR2',
//         productId: 'PSVR2',
//         brandId: 4, // Microsoft
//         description: 'Trải nghiệm thực tế ảo đỉnh cao với PlayStation VR2 dành riêng cho hệ máy PS5.',
//         tagName: 'THỰC TẾ ẢO',
//         variants: JSON.stringify([
//           { version: 'Bundle', type: 'Chính hãng', price: '14990000', quantity: '12' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Độ phân giải', info: '2000x2040 mỗi mắt' },
//           { title: 'Góc nhìn', info: '110 độ' },
//           { title: 'Hỗ trợ âm thanh', info: '3D Audio' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\PSVR2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-f0c.webp",
//           img1: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-9c5.webp",
//           img2: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-34d.webp",
//           img3: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-82b.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Phần mềm thiết kế đồ họa CorelDRAW 2024',
//         productId: 'Corel2024',
//         brandId: 2, // Dell
//         description: 'Công cụ thiết kế đồ họa mạnh mẽ, phù hợp cho nhà thiết kế chuyên nghiệp.',
//         tagName: 'PHẦN MỀM',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Digital', price: '6990000', quantity: '50' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
//           { title: 'Phiên bản', info: '2024' },
//           { title: 'Ngôn ngữ', info: 'Tiếng Anh' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Corel2024-main.webp"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Phần mềm văn phòng Microsoft Office 2024',
//         productId: 'Office2024',
//         brandId: 4, // Microsoft
//         description: 'Bộ phần mềm văn phòng phổ biến nhất với tính năng cải tiến.',
//         tagName: 'PHẦN MỀM',
//         variants: JSON.stringify([
//           { version: 'Home & Student', type: 'Digital', price: '2590000', quantity: '100' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
//           { title: 'Phiên bản', info: '2024' },
//           { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\Office2024-main.webp"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Phần mềm bảo mật Kaspersky Total Security',
//         productId: 'KTS2024',
//         brandId: 8, // GIGABYTE
//         description: 'Giải pháp bảo mật toàn diện dành cho cá nhân và doanh nghiệp.',
//         tagName: 'PHẦN MỀM',
//         variants: JSON.stringify([
//           { version: '1 Device', type: 'Digital', price: '890000', quantity: '150' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS, Android, iOS' },
//           { title: 'Phiên bản', info: '2024' },
//           { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\KTS2024-main.jpg"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Chuột gaming Logitech G502 Hero',
//         productId: 'G502HERO',
//         brandId: 1, // ASUS
//         description: 'Chuột gaming hiệu suất cao với cảm biến Hero và độ chính xác tối ưu.',
//         tagName: 'CHUỘT',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Wired', price: '1490000', quantity: '100' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Cảm biến', info: 'Hero 25K' },
//           { title: 'Đèn LED', info: 'RGB 16.8 triệu màu' },
//           { title: 'Kết nối', info: 'Có dây USB' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\G502HERO-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-578.webp",
//           img1: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-a16.webp",
//           img2: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-fd7.webp",
//           img3: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-240.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Chuột không dây Microsoft Surface Mouse',
//         productId: 'SURFACEMOUSE',
//         brandId: 4, // Microsoft
//         description: 'Thiết kế thanh lịch, tối ưu cho trải nghiệm làm việc và giải trí.',
//         tagName: 'CHUỘT',
//         variants: JSON.stringify([
//           { version: 'Bluetooth', type: 'Wireless', price: '890000', quantity: '75' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Công nghệ', info: 'Bluetooth 4.0' },
//           { title: 'Trọng lượng', info: '90g' },
//           { title: 'Pin', info: '2 x AAA, tuổi thọ lên tới 12 tháng' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\SURFACEMOUSE-main.webp"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Chuột gaming Razer DeathAdder V2',
//         productId: 'DEATHADDERV2',
//         brandId: 7, // Razer
//         description: 'Dòng chuột gaming huyền thoại với hiệu suất và thiết kế tối ưu.',
//         tagName: 'CHUỘT',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Wired', price: '1590000', quantity: '50' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Cảm biến', info: 'Focus+ Optical' },
//           { title: 'DPI tối đa', info: '20000' },
//           { title: 'Trọng lượng', info: '82g' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\DEATHADDERV2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-477.webp",
//           img1: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-d1e.webp",
//           img2: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-15f.webp",
//           img3: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-59a.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'PlayStation 5',
//         productId: 'PS5',
//         brandId: 8, // GIGABYTE
//         description: 'Máy chơi game thế hệ mới với hiệu suất cao và đồ họa vượt trội.',
//         tagName: 'CONSOLE',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Disk Edition', price: '14990000', quantity: '30' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: '8x Zen 2 Cores at 3.5GHz' },
//           { title: 'GPU', info: '10.28 TFLOPs, RDNA 2 Architecture' },
//           { title: 'Storage', info: '825GB SSD' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\PS5-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\PlayStation 5-desc-ef0.webp",
//           img1: "uploads\\product\\PlayStation 5-desc-05d.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Xbox Series X',
//         productId: 'XBOXSERIESX',
//         brandId: 4, // Microsoft
//         description: 'Cỗ máy chơi game mạnh mẽ nhất từ trước đến nay, trải nghiệm chơi game 4K tuyệt hảo.',
//         tagName: 'CONSOLE',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Disk Edition', price: '13990000', quantity: '40' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'CPU', info: '8x Zen 2 Cores at 3.8GHz' },
//           { title: 'GPU', info: '12 TFLOPs, RDNA 2 Architecture' },
//           { title: 'Storage', info: '1TB SSD' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\XBOXSERIESX-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Xbox Series X-desc-10c.webp",
//           img1: "uploads\\product\\Xbox Series X-desc-e11.webp",
//           img2: "uploads\\product\\Xbox Series X-desc-de8.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Nintendo Switch OLED',
//         productId: 'SWITCHOLED',
//         brandId: 9, // VAIO
//         description: 'Phiên bản nâng cấp của Nintendo Switch với màn hình OLED rực rỡ.',
//         tagName: 'CONSOLE',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Handheld & Docked', price: '9500000', quantity: '60' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Màn hình', info: '7-inch OLED' },
//           { title: 'Dung lượng pin', info: '4.5 - 9 giờ' },
//           { title: 'Bộ nhớ trong', info: '64GB' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\SWITCHOLED-main.webp"),
//         imageUrl: JSON.stringify({
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'VAIO VisionBeam X2',
//         productId: 'VBEAMX2',
//         brandId: 9, // VAIO
//         description: 'Máy chiếu cao cấp với độ phân giải 4K và công nghệ HDR.',
//         tagName: 'PROJECTOR',
//         variants: JSON.stringify([
//           { version: 'Deluxe', type: 'Home Cinema', price: '25000000', quantity: '30' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Độ phân giải', info: '4K UHD' },
//           { title: 'Độ sáng', info: '3000 Lumens' },
//           { title: 'Kết nối', info: 'HDMI, WiFi, Bluetooth' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\VBEAMX2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\VAIO VisionBeam X2-desc-de7.webp",
//           img1: "uploads\\product\\VAIO VisionBeam X2-desc-f0d.webp",
//           img2: "uploads\\product\\VAIO VisionBeam X2-desc-0a4.webp",
//           img3: "uploads\\product\\VAIO VisionBeam X2-desc-6fe.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'ASUS ProBeam Lite',
//         productId: 'APBLITE',
//         brandId: 1, // ASUS
//         description: 'Máy chiếu nhỏ gọn với khả năng trình chiếu sắc nét và dễ di chuyển.',
//         tagName: 'PROJECTOR',
//         variants: JSON.stringify([
//           { version: 'Compact', type: 'Portable', price: '12000000', quantity: '50' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Độ phân giải', info: '1080p Full HD' },
//           { title: 'Độ sáng', info: '2500 Lumens' },
//           { title: 'Kết nối', info: 'HDMI, USB-C' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\APBLITE-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\ASUS ProBeam Lite-desc-08a.webp",
//           img1: "uploads\\product\\ASUS ProBeam Lite-desc-4d0.webp",
//           img2: "uploads\\product\\ASUS ProBeam Lite-desc-7db.webp",
//           img3: "uploads\\product\\ASUS ProBeam Lite-desc-aa6.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Lenovo BrightCast P7',
//         productId: 'LBCP7',
//         brandId: 3, // Lenovo
//         description: 'Máy chiếu văn phòng với độ sáng cao và tuổi thọ bóng đèn lâu dài.',
//         tagName: 'PROJECTOR',
//         variants: JSON.stringify([
//           { version: 'Professional', type: 'Office', price: '17000000', quantity: '40' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Độ phân giải', info: 'WUXGA (1920x1200)' },
//           { title: 'Độ sáng', info: '4000 Lumens' },
//           { title: 'Kết nối', info: 'HDMI, VGA, LAN' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\LBCP7-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Lenovo BrightCast P7-desc-380.webp",
//           img1: "uploads\\product\\Lenovo BrightCast P7-desc-878.webp",
//           img2: "uploads\\product\\Lenovo BrightCast P7-desc-bd7.webp",
//           img3: "uploads\\product\\Lenovo BrightCast P7-desc-151.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'ASUS LockerPro A3',
//         productId: 'ALPA3',
//         brandId: 1, // ASUS
//         description: 'Hộc tủ bảo mật cao dành cho văn phòng hiện đại.',
//         tagName: 'FILING_CABINET',
//         variants: JSON.stringify([
//           { version: 'Standard', type: 'Office', price: '9000000', quantity: '25' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '600x800x450mm' },
//           { title: 'Chất liệu', info: 'Thép không gỉ' },
//           { title: 'Tính năng', info: 'Khóa điện tử, chống nước' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\ALPA3-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\ASUS LockerPro A3-desc-bb0.webp",
//           img1: "uploads\\product\\ASUS LockerPro A3-desc-c92.webp",
//           img2: "uploads\\product\\ASUS LockerPro A3-desc-255.webp",
//           img3: "uploads\\product\\ASUS LockerPro A3-desc-cfa.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Dell SafeBox D9',
//         productId: 'DSBD9',
//         brandId: 2, // Dell
//         description: 'Hộc tủ văn phòng bền bỉ với không gian lưu trữ rộng.',
//         tagName: 'FILING_CABINET',
//         variants: JSON.stringify([
//           { version: 'Premium', type: 'Office', price: '12000000', quantity: '15' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '700x900x500mm' },
//           { title: 'Chất liệu', info: 'Gỗ ép cao cấp' },
//           { title: 'Tính năng', info: 'Khóa từ, ngăn chống trộm' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\DSBD9-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Dell SafeBox D9-desc-d65.webp",
//           img1: "uploads\\product\\Dell SafeBox D9-desc-ffd.webp",
//           img2: "uploads\\product\\Dell SafeBox D9-desc-b6d.webp",
//           img3: "uploads\\product\\Dell SafeBox D9-desc-e20.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Acer SecureVault S2',
//         productId: 'ACSVS2',
//         brandId: 6, // Acer
//         description: 'Hộc tủ thông minh với thiết kế hiện đại và công nghệ tiên tiến.',
//         tagName: 'FILING_CABINET',
//         variants: JSON.stringify([
//           { version: 'Advanced', type: 'Office', price: '14000000', quantity: '10' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '800x1000x600mm' },
//           { title: 'Chất liệu', info: 'Nhôm hợp kim' },
//           { title: 'Tính năng', info: 'Cảm biến vân tay, bảo vệ RFID' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\ACSVS2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Acer SecureVault S2-desc-174.webp",
//           img1: "uploads\\product\\Acer SecureVault S2-desc-662.webp",
//           img2: "uploads\\product\\Acer SecureVault S2-desc-220.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Dell LaptopStand Flex',
//         productId: 'DLFS1',
//         brandId: 2, // Dell
//         description: 'Giá đỡ laptop với thiết kế gọn nhẹ, dễ dàng điều chỉnh để phù hợp với nhiều góc nhìn.',
//         tagName: 'LAPTOP_STAND',
//         variants: JSON.stringify([
//           { version: 'Basic', type: 'Home', price: '6000000', quantity: '15' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '350x250x50mm' },
//           { title: 'Chất liệu', info: 'Hợp kim nhôm' },
//           { title: 'Tính năng', info: 'Điều chỉnh góc độ, chống trượt' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\DLFS1-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Dell LaptopStand Flex-desc-d0d.webp",
//           img1: "uploads\\product\\Dell LaptopStand Flex-desc-ea0.webp",
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Lenovo TabletStand Pro',
//         productId: 'LTS1',
//         brandId: 3, // Lenovo
//         description: 'Giá đỡ tablet chuyên nghiệp với thiết kế chắc chắn, hỗ trợ đa thiết bị.',
//         tagName: 'TABLET_STAND',
//         variants: JSON.stringify([
//           { version: 'Premium', type: 'Office', price: '8000000', quantity: '12' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '200x150x40mm' },
//           { title: 'Chất liệu', info: 'Hợp kim thép' },
//           { title: 'Tính năng', info: 'Chống rung, xoay 360 độ' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\LTS1-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Lenovo TabletStand Pro-desc-69f.webp",
//           img1: "uploads\\product\\Lenovo TabletStand Pro-desc-6ed.webp",
//           img2: "uploads\\product\\Lenovo TabletStand Pro-desc-dd6.webp",
//           img3: "uploads\\product\\Lenovo TabletStand Pro-desc-22c.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//       {
//         name: 'Razer BladeStand V2',
//         productId: 'RZBS2',
//         brandId: 7, // Razer
//         description: 'Giá đỡ laptop tối ưu cho gaming, thiết kế mạnh mẽ, phù hợp với game thủ chuyên nghiệp.',
//         tagName: 'LAPTOP_STAND',
//         variants: JSON.stringify([
//           { version: 'Gaming', type: 'Pro', price: '9500000', quantity: '8' }
//         ]),
//         specifications: JSON.stringify([
//           { title: 'Kích thước', info: '400x300x60mm' },
//           { title: 'Chất liệu', info: 'Kim loại cao cấp' },
//           { title: 'Tính năng', info: 'Hệ thống tản nhiệt, đèn LED RGB' }
//         ]),
//         productImage: JSON.stringify("uploads\\product\\RZBS2-main.webp"),
//         imageUrl: JSON.stringify({
//           img0: "uploads\\product\\Razer BladeStand V2-desc-25d.webp",
//           img1: "uploads\\product\\Razer BladeStand V2-desc-07c.webp",
//           img2: "uploads\\product\\Razer BladeStand V2-desc-c75.webp",
//           img3: "uploads\\product\\Razer BladeStand V2-desc-9d6.webp"
//         }),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       },
//     ]);

//     // Thêm dữ liệu vào bảng ProductCategory
//     await knex('ProductCategory').insert([
//       {
//         productId: 1, 
//         categoryId: 1,
//       },
//       {
//         productId: 2, 
//         categoryId: 1,
//       },
//       {
//         productId: 3, 
//         categoryId: 1,
//       },
//       {
//         productId: 4, 
//         categoryId: 1,
//       },
//       {
//         productId: 5, 
//         categoryId: 1,
//       },
//       {
//         productId: 6, 
//         categoryId: 1,
//       },
//       {
//         productId: 7, 
//         categoryId: 1,
//       },
//       {
//         productId: 8, 
//         categoryId: 1,
//       },
//       {
//         productId: 9, 
//         categoryId: 1,
//       },
//       {
//         productId: 10, 
//         categoryId: 1,
//       },
//       {
//         productId: 11, 
//         categoryId: 1,
//       },
//       {
//         productId: 12, 
//         categoryId: 1,
//       },
//       {
//         productId: 13, 
//         categoryId: 1,
//       },
//       {
//         productId: 14, 
//         categoryId: 2,
//       },
//       {
//         productId: 15, 
//         categoryId: 2,
//       },
//       {
//         productId: 16, 
//         categoryId: 2,
//       },
//       {
//         productId: 17, 
//         categoryId: 2,
//       },
//       {
//         productId: 18, 
//         categoryId: 2,
//       },
//       {
//         productId: 19, 
//         categoryId: 2,
//       },
//       {
//         productId: 20, 
//         categoryId: 3,
//       },
//       {
//         productId: 21, 
//         categoryId: 3,
//       },
//       {
//         productId: 22, 
//         categoryId: 3,
//       },
//       {
//         productId: 23, 
//         categoryId: 3,
//       },
//       {
//         productId: 24, 
//         categoryId: 3,
//       },
//       {
//         productId: 25, 
//         categoryId: 3,
//       },
//       {
//         productId: 26, 
//         categoryId: 3,
//       },
//       {
//         productId: 27, 
//         categoryId: 3,
//       },
//       {
//         productId: 28, 
//         categoryId: 3,
//       },
//       {
//         productId: 29, 
//         categoryId: 3,
//       },
//       {
//         productId: 30, 
//         categoryId: 3,
//       },
//       {
//         productId: 31, 
//         categoryId: 4,
//       },
//       {
//         productId: 32, 
//         categoryId: 4,
//       },
//       {
//         productId: 33, 
//         categoryId: 4,
//       },
//       {
//         productId: 34, 
//         categoryId: 4,
//       },
//       {
//         productId: 35, 
//         categoryId: 4,
//       },
//       {
//         productId: 36, 
//         categoryId: 5,
//       },
//       {
//         productId: 37, 
//         categoryId: 6,
//       },
//       {
//         productId: 38, 
//         categoryId: 6,
//       },
//       {
//         productId: 39, 
//         categoryId: 6,
//       },
//       {
//         productId: 40, 
//         categoryId: 7,
//       },
//       {
//         productId: 41, 
//         categoryId: 7,
//       },
//       {
//         productId: 42, 
//         categoryId: 7,
//       },
//       {
//         productId: 43, 
//         categoryId: 8,
//       },
//       {
//         productId: 44, 
//         categoryId: 8,
//       },
//       {
//         productId: 45, 
//         categoryId: 8,
//       },
//       {
//         productId: 46, 
//         categoryId: 9,
//       },
//       {
//         productId: 47, 
//         categoryId: 9,
//       },
//       {
//         productId: 48, 
//         categoryId: 9,
//       },
//       {
//         productId: 49, 
//         categoryId: 10,
//       },
//       {
//         productId: 50, 
//         categoryId: 10,
//       },
//       {
//         productId: 51, 
//         categoryId: 10,
//       },
//       {
//         productId: 52, 
//         categoryId: 11,
//       },
//       {
//         productId: 53, 
//         categoryId: 11,
//       },
//       {
//         productId: 54, 
//         categoryId: 11,
//       },
//       {
//         productId: 55, 
//         categoryId: 12,
//       },
//       {
//         productId: 56, 
//         categoryId: 12,
//       },
//       {
//         productId: 57, 
//         categoryId: 12,
//       },
//       {
//         productId: 58, 
//         categoryId: 13,
//       },
//       {
//         productId: 59, 
//         categoryId: 13,
//       },
//       {
//         productId: 60, 
//         categoryId: 13,
//       },
//       {
//         productId: 61, 
//         categoryId: 14,
//       },
//       {
//         productId: 62, 
//         categoryId: 14,
//       },
//       {
//         productId: 63, 
//         categoryId: 14,
//       },
//       {
//         productId: 46, 
//         categoryId: 15,
//       },
//       {
//         productId: 47, 
//         categoryId: 15,
//       },
//       {
//         productId: 48, 
//         categoryId: 15,
//       },
//       {
//         productId: 64, 
//         categoryId: 16,
//       },
//       {
//         productId: 65, 
//         categoryId: 16,
//       },
//       {
//         productId: 66, 
//         categoryId: 16,
//       },
//     ]);

//     console.log('Seed dữ liệu thành công!');
//   } catch (error) {
//     console.error('Lỗi khi seed dữ liệu:', error);
//   }
// };


