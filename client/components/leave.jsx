import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Leave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide it would be better to just go home and go shopping later instead. There is no doubt you were going to miss something anyway ',
      story: props.location.state.story + 'You decide it would be better to just go home and go shopping later instead. There is no doubt you were going to miss something anyway '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Leave Store </h2>
          {this.state.body}
          <br/>
          <h4> END </h4>
          <Link to={{ pathname: '/finalstory', state: this.state }}>
            <FlatButton 
              label="Final Story" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Leave;