/* eslint-disable */
import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
      filePath?: string;
    }
  }
}
/* eslint-enable */
