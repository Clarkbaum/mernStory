import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Continue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You decide to just continue shopping. Not your problem ',
      story: props.location.state.story + 'You decide to just continue shopping. Not your problem '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Continue Shopping </h2>
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

export default Continue;