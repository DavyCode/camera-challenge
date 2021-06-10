import { Request, Response, NextFunction } from 'express';
import ValidationMiddleware from './ValidationMiddleware';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockRequest = (body: { base64EncodedImage: any }) =>
  ({
    body,
  } as Request);

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('ScreenshotUploadValidator', () => {
  it('Should return 400 when validation fail', async () => {
    const req = mockRequest({
      base64EncodedImage: 1,
    });
    const res = mockResponse();
    const next: NextFunction = jest.fn();

    await ValidationMiddleware.ScreenshotUploadValidator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toBeCalled();
  });

  it('Should pass validation and proceed to API', async () => {
    const req = mockRequest({
      base64EncodedImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzk',
    });
    const res = mockResponse();
    const next: NextFunction = jest.fn();

    await ValidationMiddleware.ScreenshotUploadValidator(req, res, next);

    expect(next).toBeCalled();
  });
});
