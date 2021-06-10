import classes from './camera-menu.module.css';
import Image from 'next/image';
import Button from '../ui/button';

const recordButton = '/Media-record.png';

type Props = {
  handleCapture: () => void;
  handleSubmit: () => void;
  handleCancel: () => void;
};

function CameraMenu({ handleCapture, handleSubmit, handleCancel }: Props) {
  return (
    <section className={classes.menu}>
      <div className={classes.footer}>
        <Button classes={classes.cancel} onClick={handleCancel}>
          Abbruch
        </Button>
        <Button classes={classes.record} onClick={handleCapture}>
          <Image src={recordButton} alt="me" width="150" height="150" />
        </Button>
        <Button classes={classes.submit} onClick={handleSubmit}>
          Fertig
        </Button>
      </div>
    </section>
  );
}

export default CameraMenu;
