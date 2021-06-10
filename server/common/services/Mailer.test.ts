import nodemailer from 'nodemailer';
import mockedEnv from 'mocked-env';
import Mailer from './Mailer';

const sendMail = Mailer.sendMail;

const sendMailMock = jest.fn();

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => {
    return { sendMail: sendMailMock };
  }),
}));

import { AWS_CONFIG_SET_EMAIL } from '../../config/env';

describe('Mailer', () => {
  let restore: { (): void };

  beforeAll(() => {
    restore = mockedEnv({
      AWS_CONFIG_SET_EMAIL,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  const subject = 'Camera Screenshot';
  const text = 'Hello mieterengel, A picture is worth a thousand words. Find attached image below';
  const attachment = Buffer.from('image');
  const mailTo = 'mieterengel@test.com';
  const filename = 'IMAGE_SCREENSHOT';

  it('Should call mailer transport', async () => {
    await sendMail({ subject, text, attachment, mailTo, filename });
    expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
  });

  it('Should call sendMail', async () => {
    await sendMail({ subject, text, attachment, mailTo, filename });

    expect(sendMailMock).toHaveBeenCalledTimes(1);
    expect(sendMailMock).toHaveBeenCalledWith({
      from: AWS_CONFIG_SET_EMAIL,
      to: mailTo,
      subject,
      text,
      attachments: [
        {
          filename,
          content: attachment,
        },
      ],
    });
  });

  afterAll(() => {
    restore();
  });
});
