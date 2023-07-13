import { Route, Routes } from 'react-router-dom';

import { FormPage, LogsPage } from '../pages';

const ROUTES = [
  {
    title: 'Send a Message',
    path: '/',
    component: FormPage
  },
  {
    title: 'Get all logs message',
    path: '/logs',
    component: LogsPage
  }
];

const NotificationRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, component: Component }, index) => (
        <Route
          key={`users-route-${index}`}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
};

export default NotificationRouter;
