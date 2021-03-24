import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OAuthProvider from './services/OAuthProvider';
import ApolloWrapper from './services/ApolloWrapper';

ReactDOM.render(
  <React.StrictMode>
    <OAuthProvider>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </OAuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
