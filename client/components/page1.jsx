import React from 'react';
import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Page1 extends React.Component {
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
          page1 test
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page1;