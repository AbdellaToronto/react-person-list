import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import orange from 'material-ui/colors/orange';
import { Provider } from 'react-redux';
import { appStore } from './redux-config';


const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

const MaterialThemedApp = props => (
  <Provider store={appStore}>
    <MuiThemeProvider {...props}>
      <App />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(<MaterialThemedApp theme={theme} />, document.getElementById('root'));
registerServiceWorker();
