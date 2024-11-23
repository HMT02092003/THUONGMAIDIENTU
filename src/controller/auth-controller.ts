export const register = (req:any, res:any) => {
    const { username, password } = req.body;
    console.log(`User ${username} registered successfully`);

    res.json({ message: `User ${username} registered successfully` });
};
