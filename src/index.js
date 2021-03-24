import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxProvider from './redux/ReduxProvider';
import ApolloWrapper from './services/ApolloWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
