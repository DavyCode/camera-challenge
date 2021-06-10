import { Fragment } from 'react';
import Head from 'next/head';
import CaptureScreen from '../../components/capture/CaptureScreen';

function Capture() {
  return (
    <Fragment>
      <Head>
        <title>Capture Image</title>
        <meta name="description" content="Capture your favorite moments" />
      </Head>
      <CaptureScreen />
    </Fragment>
  );
}

export default Capture;
