import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Import từ Node.js
import { UploadedFile } from 'express-fileupload';

// Tạo __dirname trong ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const saveFile = async (file: UploadedFile, userId: string): Promise<string> => {
    try {
        // Xác định thư mục lưu trữ ảnh
        const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

        // Đảm bảo thư mục upload tồn tại
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Sử dụng userId làm tên file, giữ nguyên phần mở rộng của file gốc
        const fileExtension = path.extname(file.name);
        const fileName = `${userId}${fileExtension}`;
        const filePath = path.join(uploadDir, fileName);

        // Ghi file vào thư mục upload
        await file.mv(filePath); // Sử dụng `mv` của `express-fileupload`

        // Trả về đường dẫn tương đối để lưu trong cơ sở dữ liệu
        const relativeFilePath = path.join('uploads', fileName);
        console.log("File saved at:", relativeFilePath);
        return relativeFilePath;
    } catch (err: any) {
        console.error('Error saving file:', err);
        throw new Error('Error saving file: ' + err.message);
    }
};
