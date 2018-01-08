import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/App';
import style from './src/containers/App.css';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./src/containers/App', () => {
    const NextApp = require('./src/containers/App').default;
    ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      document.getElementById('app')
    );
  });
}