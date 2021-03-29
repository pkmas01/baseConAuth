import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloWrapper from './services/ApolloWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
