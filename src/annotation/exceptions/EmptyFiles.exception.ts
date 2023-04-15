import { BadRequestException } from '@nestjs/common';

export class EmptyFilesException extends BadRequestException {
  constructor() {
    super('Empty files provided.');
  }
}
