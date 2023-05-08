import { randomBytes } from 'crypto';

export const generateRandomPassword = (length: number): string => {
  const randomBytesBuffer = randomBytes(length);
  const password = randomBytesBuffer.toString('base64').slice(0, length);

  return password;
};