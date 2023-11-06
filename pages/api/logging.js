import jwt from 'jsonwebtoken';
import connectMongoDB from '../../libs/mongodb';
import registerInfo from '../../models/register';
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
    try {
      await connectMongoDB();
      const user = await registerInfo.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'User not found.' });
      }
      const userEmail = email.toLowerCase();
      const storedEmail = user.email.toLowerCase();
      if (userEmail !== storedEmail) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      if (password === user.password) {
        const data = { id: user._id, username: user.username, email: user.email, wallet: user.wallet }
        const token = await jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "4h" })
        
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 3,
            sameSite: "strict",
            path: "/"
          })
        );

        return res.status(200).json({ message: "Login Successful", success: true });
      } else {
        console.log('Provided password:', password);
        console.log('Stored hashed password:', user.password);
        return res.status(401).json({ error: 'Invalid password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: error.message });
    }
  }
}
