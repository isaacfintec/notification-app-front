import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages';

const ROUTES = [
  {
    title: 'Send a Message',
    path: '/',
    component: MainPage
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
