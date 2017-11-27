import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Drink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide to seize the moment of looking like a hero to get a date. "No problem at all I am glad I could help" you say. "Would you like to go grab a drink? There\'s a coffee place around the corner. Also my name is ' + props.location.state.char1 + '." She smiles "that sounds like a wonderful idea." ',
      story: props.location.state.story + 'You decide to seize the moment of looking like a hero to get a date. "No problem at all I am glad I could help" you say. "Would you like to go grab a drink? There\'s a coffee place around the corner. Also my name is ' + props.location.state.char1 + '." She smiles "that sounds like a wonderful idea." '
    };
  }

  addStory() {
    fetch('http://localhost:8000/storys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        story: this.state.story,
      })
    })
    .then(console.log("story added"))
    .catch(err => console.log("error posting story", err))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}> Whould You Like To Get A Drink? </span>
          </h2>
          <Paper style={this.state.styles.story} zDepth={2}>
            {this.state.body}
          </Paper>
          <br/>
          <h4> You Got Yourself A Date! </h4>
          <h4> END </h4>
          <Link to={{ pathname: '/finalstory', state: this.state }}>
            <FlatButton 
              label="Final Story" 
              onTouchTap={this.addStory.bind(this)}
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Drink;