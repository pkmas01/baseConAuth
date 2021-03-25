import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloWrapper from './services/ApolloWrapper';
import AppStore from './store/AppStoreContext';

ReactDOM.render(
  <React.StrictMode>
    <AppStore>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </AppStore>
  </React.StrictMode>,
  document.getElementById('root'),
);
