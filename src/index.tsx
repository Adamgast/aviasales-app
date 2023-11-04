import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './redux/reducers/reducer';
import { App } from './components/app/App';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
