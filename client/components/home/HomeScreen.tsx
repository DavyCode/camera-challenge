import { Fragment } from 'react';
import Button from '../ui/button';
import classes from './HomeScreen.module.css';

function HomeScreen() {
  return (
    <Fragment>
      <main className={classes.main}>
        <h1 className={classes.title}>
          <p>Amazing Camera App</p>
        </h1>
        <div data-testid="home-button">
          <Button link="/capture">
            <span> Start Capture </span>
          </Button>
        </div>
      </main>
    </Fragment>
  );
}

export default HomeScreen;
