import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getUser, getUsers } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().alphanum().required(),
    }),
  }),
  getUser,
);

export default router;