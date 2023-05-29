export class AppError {
    message;
    statusCode;
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
//# sourceMappingURL=AppError.js.map