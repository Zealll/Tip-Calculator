import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from 'react-router-dom'

import Nav from './components/Nav.js'
import Form from './components/Form.js'
import Result from './components/Result.js'
import NightForm from './components/NightForm.js'
import NightResult from './components/NightResult.js'

function App() {

  const [state, setState] = useState()
  const [nightState, setNightState] = useState()

  return (
    <div className="App">
      <div className='nav'>
        <Nav />
      </div>
      <div className='picks'>
        <Link to='/'><button className='pick'>Morning</button></Link>
        <Link to='/nightform'><button className='pick'>Night</button></Link>
      </div>
      <Route exact path='/' render={props => <Form {...props} setState={setState} /> } />
      <Route exact path='/result' render={props => <Result {...props} state={state} /> } />
      <Route exact path='/nightform' render={props => <NightForm {...props} setNightState={setNightState} />} />
      <Route exact path='/nightform/result' render={props => <NightResult {...props} nightState={nightState} />} />
      
    </div>
  );
}

export default App;
