import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NotificationRouter from '@entities/notifications/routes';

const GlobalRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/notifications" />} />
        <Route path="/notifications" element={<NotificationRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
