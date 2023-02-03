import jwt from 'jsonwebtoken';
const { JWT_SECRET = 'dev-key' } = process.env;

export default function createToken(_id: string) {
  return jwt.sign({ _id: _id }, JWT_SECRET, {
        expiresIn: '2h',
      });
}