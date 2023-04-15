import { HttpException, HttpStatus } from '@nestjs/common';

export class FilesAlreadyAnnotatedException extends HttpException {
  constructor() {
    super('Files already annotated', HttpStatus.CONFLICT);
  }
}
