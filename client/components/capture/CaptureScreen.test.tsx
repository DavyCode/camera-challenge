import { render, cleanup } from '@testing-library/react';
import CaptureScreen from './CaptureScreen';

afterEach(cleanup);

describe('CaptureScreen', () => {
  const renderComponent = () => render(<CaptureScreen />);

  it('Should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('Should render frame', () => {
    const { container } = renderComponent();
    expect(container.getElementsByClassName('frame').length).toBe(1);
  });

  //TODO - Should POST capture image scr
});
