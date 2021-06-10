import AWS from 'aws-sdk';
import nodemailer from 'nodemailer';
import { MailerObject } from '../../common/types/mailer.types';

import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_CONFIG_SET_EMAIL } from '../../config/env';

// @ts-expect-error
const accessKeyId: string = AWS_ACCESS_KEY_ID;
// @ts-expect-error
const secretAccessKey: string = AWS_SECRET_ACCESS_KEY;
// @ts-expect-error
const awsRegion: string = AWS_REGION;
// @ts-expect-error
const awsConfigSetVerifiedEmail: string = AWS_CONFIG_SET_EMAIL;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region: awsRegion,
});

const ses = new AWS.SES();

class Mailer {
  async sendMail({ subject, text, attachment, mailTo, filename }: MailerObject) {
    const mailOptions = {
      from: awsConfigSetVerifiedEmail,
      to: mailTo,
      subject,
      text,
      attachments: attachment
        ? [
            {
              filename,
              content: attachment,
            },
          ]
        : [],
    };

    const transporter = nodemailer.createTransport({
      SES: ses,
    });

    // send email
    await transporter.sendMail(mailOptions);
  }
}

export default new Mailer();
