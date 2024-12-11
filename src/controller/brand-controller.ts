import { Request, Response } from 'express';
import { saveFile } from '../service/uploadService';
import Brand from '../Models/BrandModel';

export const createBrand = async (req: any, res: any) => {
    console.log(req.body);
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Chưa đăng nhập" });

        const { brandName, description } = req.body;

        const brand = await Brand.query().findOne({ name: brandName });

        if (brand) return res.status(400).json({ message: "Thể loại đã tồn tại" });

        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = brandName;
            const action = "Brand";
            avatarUrl = await saveFile(img, ID, action);
        }

        console.log("avatarUrl", avatarUrl);

        const newData = {
            name: brandName,
            description: description,
            imageUrl: avatarUrl,
            createdAt: new Date().toISOString(),
        }

        console.log(newData);

        const newBrand = await Brand.query().insert(newData);

        return res.status(200).json(newBrand);

    } catch (error) {
        console.log(error);
    }
}

export const getAllBrand = async (req: Request, res: Response) => {
    try {
        const categories = await Brand.query();
        return res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const get1Brand = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        console.log("id", id);
        const brand = await Brand.query().findById(id);
        return res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const updateBrand = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { id, brandName, description } = req.body;

        console.log("req.files.image", req.files);

        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = brandName;
            const action = "Brand";
            avatarUrl = await saveFile(img, ID, action);
        }

        // Chỉ thêm trường `imageUrl` khi có avatarUrl
        const newData: any = {
            name: brandName,
            description: description,
            updatedAt: new Date().toISOString(),
        };

        if (avatarUrl) {
            newData.imageUrl = avatarUrl;
        }

        await Brand.query().findById(id).patch(newData);

        return res.status(200).json({ message: "Cập nhật danh mục thành công" });
    } catch (error) {
        console.error(error); // Thêm log lỗi để dễ debug
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
};

export const deleteBrand = async (req: any, res: any) => {
    try {
        const { ids: userIds } = req.body;
        console.log("userIds", userIds);

        if (userIds && userIds.length > 0) {
            await Brand.query().delete().whereIn("id", userIds);
        } else {
            return res.status(400).json({ message: "Danh sách ID không hợp lệ" });
        }
        return res.status(200).json({ message: "Xóa danh mục thành công" });
    } catch (error) {
        console.error(error); // Thêm log lỗi để dễ debug
        res.status(500).json({ message: "Lỗi 500 - Xóa danh mục thất bại" });
    }
}
