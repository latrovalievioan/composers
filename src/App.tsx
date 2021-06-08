import React from 'react';
import './App.css';
import { essentials, popular, nameSearch, favorites } from './redux/actions';
import { useAppDispatch } from './hooks';
import { ComposersGrid } from './components/ComposersGrid';

function App() {
  const dispatch = useAppDispatch();
  const searchBar = React.useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <h1 className="page-title">Classical Composers</h1>
      <input
        ref={searchBar}
        onInput={() => {
          if (searchBar.current) dispatch(nameSearch(searchBar.current.value));
        }}
        type="text"
        placeholder="Find a Composer"
        className="search-bar"
      />
      <nav className="buttons">
        <button onClick={() => dispatch(essentials())} className="nav-button">
          Essential Composers
        </button>
        <button onClick={() => dispatch(popular())} className="nav-button">
          Popular Composers
        </button>
        <button onClick={() => dispatch(favorites())} className="nav-button">
          Favorite Composers
        </button>
      </nav>
      <ComposersGrid />
    </div>
  );
}

export default App;
