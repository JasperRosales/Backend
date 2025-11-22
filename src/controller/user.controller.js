import {login, register} from '../model/user.model.js';

export const AuthController = {
  Login: async (req, res) => {
    const { email, password } = req.body;
    const response = await login(email, password);
    res.json(response);
  },

  Register: async (req, res) => {
    const { name, email, password } = req.body;
    const response = await register(name, email, password);
    res.json(response);
  },
}