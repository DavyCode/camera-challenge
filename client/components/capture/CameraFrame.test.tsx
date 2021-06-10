import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CameraFrame from './CameraFrame';

afterEach(cleanup);

describe('CameraFrame', () => {
  it('Should display Webcam', () => {
    const imgSrc = null;
    const webcamRef = jest.fn();

    const { getByTestId } = render(<CameraFrame imgSrc={imgSrc} webcamRef={webcamRef} />);

    expect(getByTestId('show-webcam')).toBeInTheDocument();
  });

  it('Should display Screenshot Capture', () => {
    const imgSrc = '1';
    const webcamRef = jest.fn();

    const { getByTestId } = render(<CameraFrame imgSrc={imgSrc} webcamRef={webcamRef} />);

    expect(getByTestId('show-capture')).toBeInTheDocument();
  });
});
