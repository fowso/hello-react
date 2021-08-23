import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리엑트';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
    };
  return (<div style={style}>{name}</div>);
  
}

export default App;
