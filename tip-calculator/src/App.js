import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'

import Nav from './components/Nav.js'
import Form from './components/Form.js'
import Result from './components/Result.js'

function App() {

  const [state, setState] = useState()

  return (
    <div className="App">
      <div className='nav'>
        <Nav />
      </div>
      <Route exact path='/' render={props => <Form {...props} setState={setState} /> } />
      <Route exact path='/result' render={props => <Result {...props} state={state} /> } />
      
    </div>
  );
}

export default App;
