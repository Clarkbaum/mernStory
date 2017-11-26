import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      body: 'You decide it would be better to just go home and go shopping later instead. There is no doubt you were going to miss something anyway'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Leave Store </h2>
          {this.state.body}
          <h4> END </h4>
          <br/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page2;