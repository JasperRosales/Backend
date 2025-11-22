import jwt from 'jsonwebtoken';
import { SECRET } from '../config/env.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }
  try {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
      req.user = decoded;
      next(); 
    });
  } catch (err) {
    return res.status(500).json({ message: 'Server error while validating token' });
  }
};

export default authMiddleware;
