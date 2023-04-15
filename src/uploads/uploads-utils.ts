import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import * as path from 'path';
import { extname } from 'path';
import { randomUUID } from 'crypto';
import { CustomRequest } from 'src/common/types';
import { assetFolder } from 'src/annotation/constants';

function getFilename(req, file, cb) {
  const uniqueSuffix = randomUUID();

  const filenameWithoutExtension = file.originalname.split('.')[0];

  const extension = extname(file.originalname);

  cb(null, `${filenameWithoutExtension}-${uniqueSuffix}${extension}`);
}

export const filesTypesFilter = (validExtensions: any) =>
  function (req, file, callback) {
    const imageExtension = path.extname(file.originalname);

    const errorMessage = getErrorImagesTypes(validExtensions);

    if (!validExtensions.includes(imageExtension)) {
      req.fileValidationError = errorMessage;
      return callback(new BadRequestException(errorMessage), false);
    }

    return callback(null, true);
  };

const getErrorImagesTypes = (types: string[]) =>
  `Invalid file type provided, valid types are: ${JSON.stringify(types)}`;

export const storageDistination = diskStorage({
  destination: (req: CustomRequest, file, cb) => {
    const uploadCsvFoldername = req.uploadCsvFoldername;

    cb(null, `${assetFolder}/${uploadCsvFoldername}`);
  },

  filename: getFilename,
});
