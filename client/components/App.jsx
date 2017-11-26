import React from 'react';
//import { Link } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: 'MainCharacter',
      char2: 'Lady',
      char3: 'RoomMate',
      styles: styles
    };
  }

  handleStart() {
    console.log('handleStart clicked')
  }

  textChange(type, value) {
    if(type === 'char1'){
      this.setState({char1: value})
    } else if (type === 'char2') {
      this.setState({char2: value})
    } else if (type === 'char3') {
      this.setState({char3: value})
    }
  }
  

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>MERN Choose-Your-Own-Adventure Story </h1>
          <br/>
          <TextField
            name='char1'
            floatingLabelText='Your Character'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char1', value)}
          />
          <TextField
            name='char2'
            floatingLabelText='Female Name'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char2', value)}
          />
          <TextField
            name='char3'
            floatingLabelText='Male Name'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char3', value)}
          />
          <TextField
            name='email'
            floatingLabelText='email'
            fullWidth={true}
            onChange={(e, value) => this.textChange('email', value)}
          />
          <Link to={{ pathname: '/arrived', state: this.state }}>
            <FlatButton 
              label="Start Story" 
              onTouchTap={this.handleStart.bind(this)}
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  header: {
    backgroundColor: '#2d2d2d',
    height: 180,
    paddingTop: 100,
    margin: 0,
    textAlign: 'center',
    marginBottom: 20
  },
  topTitle: {
    fontSize: 34,
    fontWeight: 600,
    fontFamily: 'proxima-nova,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
    color: '#61dafb',
    margin: 0
  }
}

export default App;