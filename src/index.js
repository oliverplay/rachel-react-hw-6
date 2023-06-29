import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from 'components/App';

// Render the app using ReactDOM.createRoot to enable concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the app with the Provider component to make the Redux store available */}
    <Provider store={store}>
      {/* Wrap the app with the PersistGate component to enable persistence */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Render the App component */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
