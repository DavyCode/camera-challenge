import express from 'express';
import debug from 'debug';
import pdf from 'html-pdf';
import { promisify } from 'util';
import { UploadScreenshot } from '../types/uploadScreenshot';
import generateHtmlTemplate from '../../../utils/generateHtmlTemplate';
import Mailer from '../../../common/services/Mailer';

import { MAIL_TO } from '../../../config/env';

// @ts-expect-error
const mailTo: string = MAIL_TO;

const debugLog: debug.IDebugger = debug('FileUploadController');

class FileUploadController {
  async uploadFile(req: express.Request, res: express.Response) {
    try {
      const { base64EncodedImage } = req.body as UploadScreenshot;
      const html = await generateHtmlTemplate({ base64EncodedImage });
      const newPdfInstance = pdf.create(html, { format: 'Letter' });
      const pdfBuffer = await promisify(newPdfInstance.toBuffer.bind(newPdfInstance))();

      if (!Buffer.isBuffer(pdfBuffer)) {
        throw new Error('Could not generate pdf buffer');
      }

      await Mailer.sendMail({
        subject: 'Camera Screenshot',
        text: 'Hello mieterengel, \n A picture is worth a thousand words. \n Find attached image below',
        attachment: pdfBuffer,
        mailTo: mailTo,
        filename: `IMAGE_SCREENSHOT ${Date.now().toString()}.pdf`,
      });

      res.status(200).send({ status: 'success', message: 'Image upload successful' });
    } catch (error) {
      debugLog(error);
      return res.status(500).send({ status: 'error', message: error.message });
    }
  }
}

export default new FileUploadController();
