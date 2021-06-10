import generateHtmlTemplate from './generateHtmlTemplate';

describe('Test Generate HTML template', () => {
  it('Should generate a string of html template', async () => {
    const base64EncodedImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzk';
    const result: string = await generateHtmlTemplate({ base64EncodedImage });
    expect(result).toMatch(/html/);
  });
});
