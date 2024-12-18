import { Request, Response } from 'express';
import ProductModel from '../Models/ProductModel';
import { saveFile } from '../service/uploadService';
import ProductCategoryModel from '../Models/ProductCategoryModel';
import { parseNestedData } from '../utils/parseNestedData';
import BrandModel from '../Models/BrandModel';

export const createProduct = async (req: Request, res: Response) => {
    const transaction = await ProductModel.startTransaction();
    try {
        const dataAfterParse = parseNestedData(req.body);
        console.log(dataAfterParse);
        
        // Kiểm tra sản phẩm đã tồn tại (theo mã sản phẩm - productID)
        const existingProduct = await ProductModel.query(transaction).findOne({ productId: dataAfterParse.productID });
        if (existingProduct) {
            await transaction.rollback();
            return res.status(400).json({ message: "Sản phẩm đã tồn tại" });
        }

        // Xử lý ảnh
        let imageUrls: { [key: string]: string } = {};
        if (req.files) {
            let counter = 0;
            for (const file in req.files) {
                const img = req.files[file] as any;
                const ID: any = `${dataAfterParse.productID}-${counter}`;
                const action = "product";
                const avatarUrl = await saveFile(img, ID, action);
                imageUrls[`img${counter}`] = avatarUrl;
                counter++;
            }
        }

        // Tạo sản phẩm mới
        const newProduct = {
            name: dataAfterParse.productName,
            productId: dataAfterParse.productID, // Đây là mã sản phẩm từ client
            brandId: parseInt(dataAfterParse.brand, 10),
            price: parseFloat(dataAfterParse.price),
            quantity: parseInt(dataAfterParse.quantity, 10),
            specifications: dataAfterParse.configurations,
            imageUrl: imageUrls,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            description: dataAfterParse.description || null,
        };

        // Chèn sản phẩm và lấy ID tự động từ cơ sở dữ liệu
        const insertedProduct = await ProductModel.query(transaction).insertAndFetch(newProduct);

        // Thêm vào bảng ProductCategoryModel
        if (Array.isArray(dataAfterParse.category)) {
            for (const categoryId of dataAfterParse.category) {
                await ProductCategoryModel.query(transaction).insert({
                    productId: insertedProduct.id, // ID tự động tạo từ cơ sở dữ liệu
                    categoryId: parseInt(categoryId, 10),
                });
            }
        }

        // Commit transaction
        await transaction.commit();
        res.status(201).json({ message: "Tạo sản phẩm thành công", product: insertedProduct });
    } catch (error: any) {
        console.error("Error inserting product:", error);
        await transaction.rollback();
        res.status(500).json({ message: "Lỗi 500 - Tạo sản phẩm thất bại", error: error.message });
    }
};

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.query()
            .withGraphFetched('categories')
            .withGraphFetched('brand');


        res.status(200).json(products);
    } catch (error: any) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm thất bại", error: error.message });
    }
};


export const getProductById = async (req: Request, res: Response) => {  
    const { id } = req.body;
    try {
        const product = await ProductModel.query()
            .findById(id)
            .withGraphFetched('categories')
            .withGraphFetched('brand');

        res.status(200).json(product);
    } catch (error: any) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm thất bại", error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        // Lấy token từ cookie
        const token = req.cookies.token;
        if (!token) {
            // Báo lỗi khi không có token (người dùng chưa đăng nhập)
            return res.status(401).json({ message: 'Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.' });
        }
        console.log('Received data:', req.body);
        // Lấy danh sách userIds từ body
        const { ids: productIds } = req.body;
        console.log('User IDs to delete:', productIds);
        if (!Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ message: 'Danh sách ID snr phẩm không hợp lệ.' });
        }

        // Bắt đầu transaction
        const trx = await ProductModel.startTransaction();

        try {
            // Tìm các user cần xóa
            const productsToDelete = await ProductModel.query(trx).findByIds(productIds);

            if (productsToDelete.length !== productIds.length) {
                await trx.rollback();
                return res.status(404).json({ message: 'Không tìm thấy một hoặc nhiều người dùng.' });
            }

            // Xóa dữ liệu từ các bảng liên quan
            await ProductCategoryModel.query(trx).delete().whereIn('productId', productIds);

            // Xóa users từ bảng chính
            const deletedCount = await ProductModel.query(trx).delete().whereIn('id', productIds);

            // Commit transaction
            await trx.commit();

            // Trả về kết quả thành công
            res.status(200).json({
                status: 'success',
                message: 'Xóa người dùng và dữ liệu liên quan thành công.',
                data: {
                    deletedCount,
                    deletedUserIds: productIds,
                },
            });
        } catch (error: any) {
            await trx.rollback();
            console.error('Transaction failed:', error);
            res.status(500).json({ message: 'Xóa người dùng thất bại.', error: error.message });
        }
    } catch (err: any) {
        console.error('Error deleting users:', err);
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ.', error: err.message });
    }
};