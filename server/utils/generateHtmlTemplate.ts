type UploadScreenshotParams = {
  base64EncodedImage: string;
  width?: number;
  height?: number;
};

export default async ({ base64EncodedImage, width = 600, height = 500 }: UploadScreenshotParams): Promise<string> => {
  return `
    <html><body><img src="${base64EncodedImage}" height="${height}" width="${width}" /></body></html>
  `;
};
