import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Not Authorized' });
    }

    try {
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_key);
        req.userId = decoded.id; // Assuming 'id' is the key in your JWT payload
        req.role = decoded.role; // Optionally include role if needed
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token is Expired' });
        }
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};
