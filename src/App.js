import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';
  return (
    <div>
      {name === '리액트' ? (
        <h1>리액트 안녕</h1>
      ) : (
        <h2>잘 작동하니</h2>
      )}

      
      
    </div>
  );
}

export default App;
