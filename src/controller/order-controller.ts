


export const createOrder = async (req: Request, res: Response) => {
    // console.log(req.body);
    // try {
    //     const { id, categoryName, description } = req.body;

    //     console.log("req.files.image", req.files);

    //     let avatarUrl = '';
    //     if (req.files && req.files.image) {
    //         const img = req.files.image as any;
    //         const ID: any = categoryName;
    //         const action = "Category";
    //         avatarUrl = await saveFile(img, ID, action);
    //     }

    //     // Chỉ thêm trường `imageUrl` khi có avatarUrl
    //     const newData: any = {
    //         name: categoryName,
    //         description: description,
    //         updatedAt: new Date().toISOString(),
    //     };

    //     if (avatarUrl) {
    //         newData.imageUrl = avatarUrl;
    //     }

    //     await Category.query().findById(id).patch(newData);

    //     return res.status(200).json({ message: "Cập nhật danh mục thành công" });
    // } catch (error) {
    //     console.error(error); // Thêm log lỗi để dễ debug
    //     res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    // }
};