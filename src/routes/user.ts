import { Router } from 'express';
// import { celebrate, Joi } from 'celebrate';
import { param } from 'express-validator';
import { getUser, getUsers } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.get(
  '/:userId',
  param('userId', 'Некорректный ID пользователя').matches(/^[A-Za-z0-9]+$/),
  getUser,
);

export default router;
