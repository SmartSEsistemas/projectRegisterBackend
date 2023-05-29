export default {
    host: 'smtp.umbler.com',
    port: 587,
    service: 'Gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    },
};
//# sourceMappingURL=emailConfig.js.map