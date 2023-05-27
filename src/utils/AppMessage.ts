export class AppMessage {
  public readonly Message: string | string[];
  public readonly Status_code: number;

  constructor(message: string | string[], statusCode = 200) {
    this.Message = message;
    this.Status_code = statusCode;
  }
}