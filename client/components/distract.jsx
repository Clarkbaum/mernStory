import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Distract extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide to hurl the closet thing you can grab at the man\'s head. You pick it up a can of soup and throw it as hard as you can. You miss horribly but it was enough to spook the man, he decides to try and bolt for the door with a group of secruity guards hot on his trail. ',
      story: props.location.state.story + 'You decide to hurl the closet thing you can grab at the man\'s head. You pick it up a can of soup and throw it as hard as you can. You miss horribly but it was enough to spook the man, he decides to try and bolt for the door with a group of secruity guards hot on his trail. '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}> Try To Distract The Man </span>
          </h2>
          <Paper style={this.state.styles.story} zDepth={2}>
            {this.state.body}
          </Paper>
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