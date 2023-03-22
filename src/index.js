import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import Fallback from 'components/shared/components/Fallback/Fallback';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Suspense fallback={<Fallback />}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
