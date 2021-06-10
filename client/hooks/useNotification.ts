import { useState } from 'react';
import { Notification } from '../types';

function useNotification() {
  const [activeNotification, setActiveNotification] = useState<null | Notification>(null);

  function showNotificationHandler(notificationData: Notification) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return context;
}

export default useNotification;
