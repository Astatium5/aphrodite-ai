import express from 'express';
import User from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/register', User.register);
userRouter.post('/login', User.login);

export default userRouter;
