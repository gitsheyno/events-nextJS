import MainHeader from "./main-header";
import Notification from "../UI/notifications";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";
const Layout = ({ children }) => {
  const ctx = useContext(NotificationContext);

  const activeNotification = ctx.notification;
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
