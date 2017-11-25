import React from 'react';
import 'whatwg-fetch';
import Article from './Article'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MERN from '../assets/MERN.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  

  render() {
    return (
      <MuiThemeProvider>
        <div>
          
        TEST here plz work
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
