import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor() {
    super('And error occured', HttpStatus.CONFLICT);
  }
}
