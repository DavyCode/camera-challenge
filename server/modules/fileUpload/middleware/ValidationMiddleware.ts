import express from 'express';
import Joi from 'joi';

class ValidationMiddleware {
  async ScreenshotUploadValidator(req: express.Request, res: express.Response, next: express.NextFunction) {
    const schema = Joi.object().keys({
      base64EncodedImage: Joi.string().required(),
    });

    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (err) {
      return res.status(400).json({ status: 'error', message: `${err.details[0].message}` });
    }
  }
}

export default new ValidationMiddleware();
