import { Request } from 'express';

export interface CustomRequest extends Request {
  uploadCsvFoldername: string;
}
