import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide to see if the women is ok first. You kneel down and ask "hey ma\'am are you ok?" She looks up at you and says "thank you so much, he was trying to steal my purse. I am ' + props.location.state.char2 + ' by the way." ',
      story: props.location.state.story + 'You decide to see if the women is ok first. You kneel down and ask "hey ma\'am are you ok?" She looks up at you and says "thank you so much, he was trying to steal my purse. I am ' + props.location.state.char2 + ' by the way." '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}>Check Up On The Women </span>
          </h2>
          <Paper style={this.state.styles.story} zDepth={2}>
            {this.state.body}
          </Paper>
          <br/>
          <Link to={{ pathname: '/who', state: this.state }}>
            <FlatButton 
              label="'Who Was That Guy?'" 
            />
          </Link>
          <Link to={{ pathname: '/drink', state: this.state }}>
            <FlatButton 
              label="Ask If She Would Like A Drink" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Check;