import Webcam from 'react-webcam';
import classes from './camera-frame.module.css';

const videoConstraints = {
  facingMode: 'user',
};

type Props = {
  imgSrc: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webcamRef: any | null;
};

function CaptureFrame({ imgSrc, webcamRef }: Props) {
  return (
    <section className={classes.frame}>
      {imgSrc ? (
        <img src={imgSrc} className="image_display" data-testid="show-capture" />
      ) : (
        <div data-testid="show-webcam" className="webcam">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
        </div>
      )}
    </section>
  );
}

export default CaptureFrame;
