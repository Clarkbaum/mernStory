import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Who extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: props.location.state.char2 + ' thinks about your question. "not sure" she replies. ',
      story: props.location.state.story + props.location.state.char2 + ' thinks about your question. "not sure" she replies. '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}> Who Was That Guy? </span>
          </h2>
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

export default Who;