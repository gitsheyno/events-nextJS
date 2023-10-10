import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotificationHandler: function (notificationData) {},
  hideNotificationHAnlder: function () {},
});
export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHAnlder = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHAnlder,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
