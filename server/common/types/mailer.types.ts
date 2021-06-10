export type MailerObject = {
  subject: string;
  text: string;
  attachment?: Buffer;
  mailTo: string;
  filename?: string;
};
