import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import UserRepositoryImpl from '../repositories/implementations/prisma/UserRepositoryImpl';

const userController = new UserController(new UserService(new UserRepositoryImpl()));

const UserRoutes = Router();

UserRoutes.get('/', (req, res) => userController.findAll(req, res));

export default UserRoutes;
