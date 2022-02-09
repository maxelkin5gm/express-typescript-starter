export default class HttpException extends Error {
  public httpStatus: number;

  constructor(httpStatus:number, message: string) {
    super(message);

    this.httpStatus = httpStatus;
  }

  get JSON() {
    return {
      statusCode: this.httpStatus,
      message: this.message,
    };
  }
}
