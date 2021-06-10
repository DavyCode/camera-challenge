import express from 'express';
import { CommonRoutesConfig } from '../../common/common.routes.config';
import fileUploadController from './controller/fileUpload.controller';
import ValidationMiddleware from './middleware/ValidationMiddleware';

export class FileUploadRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FileUpload');
  }

  configureRoutes(): express.Application {
    this.app.post(`/upload`, ValidationMiddleware.ScreenshotUploadValidator, fileUploadController.uploadFile);

    return this.app;
  }
}
