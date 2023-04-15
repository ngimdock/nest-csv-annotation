import { Injectable } from '@nestjs/common';
import { HelpersService } from 'src/helpers/helpers.service';
import { EmptyFilesException } from './exceptions';

@Injectable()
export class AnnotationService {
  private filesToAnnotate = [];

  constructor(private readonly helpersService: HelpersService) {}

  annotateCsvFiles(csvFiles: Array<Express.Multer.File>) {
    return csvFiles;

    // if (!csvFiles.length) throw new EmptyFilesException();

    // for (const file of csvFiles) {
    //   const fileFormated = this.helpersService.generateCEA(file.originalname);

    //   this.filesToAnnotate.push(fileFormated);
    // }
  }
}
