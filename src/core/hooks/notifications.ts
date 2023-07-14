import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@redux';
import { pullNotifications } from '@redux/notifications';

const useNotifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications } = useSelector(
    (state: RootState) => state.notification
  );

  const refress = useCallback(() => dispatch(pullNotifications()), []);

  useEffect(() => {
    refress();
  }, [refress]);

  return { notifications, refress };
};

export default useNotifications;
