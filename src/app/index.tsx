import { Provider } from 'react-redux';

import { ReduxStore } from '@redux';
import Router from '@router';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <Router />
    </Provider>
  );
};

export default App;
