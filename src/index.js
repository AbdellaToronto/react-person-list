import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import orange from 'material-ui/colors/orange';


const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

const MaterialThemedApp = props => (
  <MuiThemeProvider {...props}>
    <App />
  </MuiThemeProvider>
);


ReactDOM.render(<MaterialThemedApp theme={theme} />, document.getElementById('root'));
registerServiceWorker();
