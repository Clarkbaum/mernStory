import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Distract extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You decide to hurl the closet thing you can grab at the man\'s head. You pick it up a can of soup and throw it as hard as you can. You miss horribly but it was enough to spook the man, he decides to try and bolt for the door with a group of secruity guards hot on his trail.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Try To Distract The Man </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/check', state: this.state }}>
            <FlatButton 
              label="Check Up On The Women" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Distract;