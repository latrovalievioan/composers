import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { essentials } from './redux/actions';

function App() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello WOrld</h1>
      <button onClick={() => dispatch(essentials())}>
        Essential Composers
      </button>
    </div>
  );
}

export default App;
