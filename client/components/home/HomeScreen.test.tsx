import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { useRouter } from 'next/router';
import HomeScreen from './HomeScreen';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/capture',
    };
  },
}));

afterEach(cleanup);

describe('HomeScreen', () => {
  const renderComponent = () => render(<HomeScreen />);

  it('Should render', () => {
    render(<HomeScreen />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('Should navigate to Capture /capture page', () => {
    const { getByTestId } = render(<HomeScreen />);

    fireEvent.click(getByTestId('home-button'));

    expect(useRouter().route).toMatch('/capture');
  });
});
