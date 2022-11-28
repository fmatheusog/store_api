import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import UserRepositoryImpl from '../repositories/implementations/prisma/UserRepositoryImpl';

const userController = new UserController(new UserService(new UserRepositoryImpl()));

const UserRoutes = Router();

UserRoutes.get('/', (req, res) => userController.findAll(req, res));

UserRoutes.get('/:id', (req, res) => userController.findById(req, res));

UserRoutes.post('/', (req, res) => userController.create(req, res));

UserRoutes.put('/:id', (req, res) => userController.update(req, res));

UserRoutes.delete('/:id', (req, res) => userController.delete(req, res));

export default UserRoutes;
