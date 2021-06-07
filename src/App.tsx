import React from 'react';
import './styles/App.css';
import { essentials, popular, nameSearch, favorites } from './redux/actions';
import { useAppDispatch, useAppSelector } from './hooks';
import { Composer } from './types';
import { ComposerCard } from './components/ComposerCard';

function App() {
  const dispatch = useAppDispatch();
  const composerList = useAppSelector((state) => state.composerList);
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

      <div className="composer-grid">
        {composerList.map((composer: Composer) => {
          return <ComposerCard key={composer.id} composer={composer} />;
        })}
      </div>
    </div>
  );
}

export default App;
