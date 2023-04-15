import { randomUUID } from 'crypto';
import { NextFunction, Response } from 'express';
import { CustomRequest } from 'src/common/types';
import * as fs from 'node:fs';
import { assetFolder } from '../constants';
import { HttpException } from '@nestjs/common';
import { FilesAlreadyAnnotatedException } from '../exceptions';

export function createFolderMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  const uploadCsvFoldername = randomUUID();

  const uploadCsvFolder = `${assetFolder}/${uploadCsvFoldername}`;

  try {
    if (fs.existsSync(uploadCsvFolder))
      throw new FilesAlreadyAnnotatedException();

    fs.mkdirSync(uploadCsvFolder);

    fs.mkdirSync(`${uploadCsvFolder}/results`);
    fs.mkdirSync(`${uploadCsvFolder}/results/wikidata`);
    fs.mkdirSync(`${uploadCsvFolder}/results/foodon`);

    req.uploadCsvFoldername = uploadCsvFoldername;
  } catch (err) {
    throw new HttpException(err.message, 500);
  }

  next();
}
