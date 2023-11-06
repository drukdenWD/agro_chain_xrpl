import jwt_decode from "jwt-decode";

export default async function GET(req, res) {
    const jwt = require('jsonwebtoken');

    const { cookies } = req;
    const tokenCookie = cookies.token;
    if (!tokenCookie) {
        return res.status(500).json({ message: "Invalid token" });
    }
const decoded = jwt.decode(tokenCookie);

    return res.status(200).json({ decoded });
}
