import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { UploadedFile } from 'express-fileupload';

// Xác định __dirname khi sử dụng ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Định nghĩa đường dẫn thư mục gốc (ngoài `src`)
const ROOT_DIR = path.resolve(__dirname, '../..'); // Thư mục gốc của dự án
const PUBLIC_DIR = path.join(ROOT_DIR, 'public'); // Đường dẫn tới `public`

export const saveFile = async (file: UploadedFile, userId: string): Promise<string> => {
    try {
        // Xác định thư mục lưu trữ ảnh (nằm ngoài `src`)
        const uploadDir = path.join(PUBLIC_DIR, 'uploads');

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