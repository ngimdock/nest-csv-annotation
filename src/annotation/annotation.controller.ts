import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnnotationService } from './annotation.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { filesTypesFilter, storageDistination } from '../uploads/uploads-utils';
import { AnnotationRoutes, annotationEnum } from './enums';

@Controller(AnnotationRoutes.annotation)
export class AnnotationController {
  constructor(private readonly annotationService: AnnotationService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor(annotationEnum.uploadInputName, annotationEnum.maxImages, {
      fileFilter: filesTypesFilter(annotationEnum.extensions),
      storage: storageDistination,
    }),
  )
  annotateCsvFiles(@UploadedFiles() csvFiles: Array<Express.Multer.File>) {
    return this.annotationService.annotateCsvFiles(csvFiles);
  }
}
