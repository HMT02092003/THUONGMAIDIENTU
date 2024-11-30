import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createToken } from '../utils/create-token';

// Import các models Objection
import { UserModel } from '../Models/UserModel';
import { RoleModel } from '../Models/RoleModel';
import { UserRoleModel } from '../Models/UserRoleModel';
import { PermissionModel } from '../Models/PermissionModel';
import { otpService } from '../service/otpService';
import jwt from 'jsonwebtoken';
import { saveFile } from '../service/uploadService'; 
import { getDecodedToken } from '../utils/decode-token';

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.query();
        res.status(200).json({
            status: 'success',
            data: {
                users,
            },
        }); // Gửi phản hồi JSON về client
    } catch (err: any) {
        console.error('Error during fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createUserHandler = async (req: Request, res: Response) => {
    console.log('Received data:', req.body);
    try {
        // Lấy token từ cookie
        const token = req.cookies.token; // Lấy token từ cookie

        const decoded = getDecodedToken(token);

        console.log('Decoded token:', decoded);

        const { 
            name, email, password, CCCD, phoneNumber, gender, nationality, 
            dateOfBirth, role
        } = req.body;

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await UserModel.query().findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email đã tồn tại' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 12);

        // Xử lý upload ảnh (nếu có)
        let avatarUrl = '';
        if (req.files && req.files.img) {
            const img = req.files.img as any;
            const userId:any = decoded?.sub;
            avatarUrl = await saveFile(img, userId);
        }

        // Tạo đối tượng newUserData
        const newUserData: any = {
            name,
            email,
            password: hashedPassword,
            CCCD,
            role,
            phoneNumber,
            dateOfBirth,
            gender,
            nationality,
            img: avatarUrl // Đường dẫn ảnh lưu trong DB
        };

        // Bắt đầu transaction
        const trx = await UserModel.startTransaction();
        try {
            // Thêm người dùng mới vào database
            const newUser = await UserModel.query(trx)
                .insert(newUserData)
                .returning('*');

            // Gán role cho user
            const dbRole = await RoleModel.query(trx).findOne({ name: role });
            if (!dbRole) {
                throw new Error(`Role '${role}' not found in the database`);
            }

            await UserRoleModel.query(trx).insert({
                userId: newUser.id,
                roleId: dbRole.id
            });

            await trx.commit();

            res.status(201).json({
                status: 'success',
                data: {
                    user: newUser,
                },
            });
        } catch (error) {
            await trx.rollback();
            res.status(500).json({ message: (error as Error).message });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};


