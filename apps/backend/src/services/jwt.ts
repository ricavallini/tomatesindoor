import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET ?? 'change-me';

export function signToken(payload: object) {
  return jwt.sign(payload, jwtSecret, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, jwtSecret);
}
