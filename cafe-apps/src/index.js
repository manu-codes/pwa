import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
const muiTheme = getMuiTheme({
  "palette":{ "primary1Color": Colors.brown800,
        "primary2Color": Colors.brown700,
        "primary3Color": Colors.grey800,
        "accent1Color": Colors.brown400,
        "textColor": fade(Colors.darkWhite, 0.87),
        "secondaryTextColor": Colors.white,
        "alternateTextColor": fade(Colors.darkWhite, 0.87),
        "canvasColor": Colors.brown500,
}
});
const Application = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  );

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
