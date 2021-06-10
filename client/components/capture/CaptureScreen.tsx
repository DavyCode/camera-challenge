import { useRef, useCallback, useState, Fragment, useContext } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Webcam from 'react-webcam';
import NotificationContext, { NotificationContextType } from '../../store/notification-context';
import CameraFrame from './CameraFrame';
import CameraMenu from './CameraMenu';

type Payload = {
  imgSrc: string | null;
  notificationCtx: NotificationContextType;
  router: NextRouter;
};

async function submitCaptureHandler({ imgSrc, notificationCtx, router }: Payload) {
  notificationCtx.showNotification({
    title: `Submitting`,
    message: 'Submitting Image...',
    status: 'pending',
  });

  const response = await window.fetch('/api/capture', {
    method: 'POST',
    body: JSON.stringify({ base64EncodedImage: imgSrc }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    notificationCtx.showNotification({
      title: 'Error!',
      message: data.error || 'Something went wrong!',
      status: 'error',
    });
    return;
  }

  notificationCtx.showNotification({
    title: 'Success!',
    message: 'Successful',
    status: 'success',
  });
  router.replace('/');
  return data;
}

function CaptureScreen() {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  function cancelCapture() {
    setImgSrc(null);
  }

  async function submitCapture() {
    try {
      if (!imgSrc) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: 'Capture an image',
          status: 'error',
        });
        return;
      } else {
        await submitCaptureHandler({ imgSrc, notificationCtx, router });
      }
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    }
  }
  return (
    <Fragment>
      <CameraFrame imgSrc={imgSrc} webcamRef={webcamRef} />
      <CameraMenu handleCapture={capture} handleCancel={cancelCapture} handleSubmit={submitCapture} />
    </Fragment>
  );
}

export default CaptureScreen;
