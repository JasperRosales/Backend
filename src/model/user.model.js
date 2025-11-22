import pool from '../database/db.js';
import validator from 'validator';
import {hashPassword, verifyPassword} from '../utils/passwordHasher.js';
import { JWT } from "../utils/jwtHelper.js";

export const register = async (name, email, password) => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === ''){
        const error = new TypeError(
            'Name, Email, Password are required'
        )
        error.statusCode = 400;
        throw error;
    }
    if (!validator.isEmail(email)){
        const error = new TypeError(
            'Nagkamali ng email toys'            
        )
        
        error.statusCode = 400;
        throw error;
    }
    if (!validator.isStrongPassword(password)){
        const error = new TypeError(
            'Hindi ka pa ganong kalakas!'            
        )
        error.statusCode = 400;
        throw error;
    }
    const user = await findUserByEmail(email);
    
    if (user.email === email) {
      return { success: false, message: "User already exists", accessToken: "", refreshToken: "" };
    }

    const hashed = await hashPassword(password);
    const userId = await createUser(name, email, hashed);

    const accessToken = JWT.sign({ id: userId, email }, "15m");
    const refreshToken = JWT.sign({ id: userId }, "7d");

    return { success: true, message: "Registration successful", accessToken, refreshToken };
}

export const findUserByEmail = async (email) => {
    const [rows] = await pool.query("SELECT * FROM userbtl WHERE email = ?", [email]);
    if (!rows.length) return null;
    const user = rows[0];
    return user;
}

export const createUser = async (name, email, password) => {
    const [result] = await pool.query(
      "INSERT INTO userbtl (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    const userId = result.insertId;

    return userId;
}

export const login = async (email, password) => {

    const user = await findUserByEmail(email);

    if (!email || !password) return { success: false, message: "Email and password are required" };
    if (!user) return { success: false, message: "User not found" };
    
    const passwordMatch = await verifyPassword(password, user.password);

    if (!passwordMatch) return { success: false, message: "Invalid credentials" };

    const accessToken = JWT.sign({ id: user.id, email: user.email }, "15m");
    const refreshToken = JWT.sign({ id: user.id }, "7d");

    return { success: true, message: "Login successful", accessToken, refreshToken };
}