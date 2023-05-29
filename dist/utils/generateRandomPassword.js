import { randomBytes } from 'crypto';
export const generateRandomPassword = (length) => {
    const randomBytesBuffer = randomBytes(length);
    const password = randomBytesBuffer.toString('base64').slice(0, length);
    return password;
};
//# sourceMappingURL=generateRandomPassword.js.map