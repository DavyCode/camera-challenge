import { Fragment, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import Notification from '../ui/Notification';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
