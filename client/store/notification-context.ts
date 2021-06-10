import { createContext } from 'react';
import { Notification } from '../types';

export type NotificationContextType = {
  notification: Notification | null;
  showNotification(notificationData: Notification): void;
  hideNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showNotification: function () {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideNotification: function () {},
});

export default NotificationContext;
