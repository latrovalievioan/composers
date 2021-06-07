import React from 'react';
import './styles/App.css';
import { essentials, popular } from './redux/actions';
import { useAppDispatch, useAppSelector } from './hooks';
import { Composer } from './types';
import { ComposerCard } from './components/ComposerCard';

function App() {
  const dispatch = useAppDispatch();
  const composerList = useAppSelector((state) => state.composerList);
  return (
    <div className="App">
      <h1 className="page-title">Classical Composers</h1>
      <nav>
        <button onClick={() => dispatch(essentials())}>
          Essential Composers
        </button>
        <button onClick={() => dispatch(popular())}>Popular Composers</button>
        <button>Favorite Composers</button>
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
