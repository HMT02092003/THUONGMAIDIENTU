export const register = (req:any, res:any) => {
    const { username, password } = req.body;
    console.log(req.body);

    res.json({ message: `User ${username} registered successfully` });
};
