import React from 'react';
import './App.css';
import { essentials, popular, nameSearch, favorites } from './redux/actions';
import { useAppDispatch } from './hooks';
import { ComposersGrid } from './components/ComposersGrid';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const searchBar = React.useRef<HTMLInputElement>(null);

  return (
    <Router>
      <div className="App">
        <h1 className="page-title">Classical Composers</h1>
        <input
          ref={searchBar}
          onInput={() => {
            if (searchBar.current)
              dispatch(nameSearch(searchBar.current.value));
          }}
          type="text"
          placeholder="Find a Composer"
          className="search-bar"
        />
        <nav className="buttons">
          <Link to="/essentials">Essential Composers</Link>
          <Link to="/popular">Popular Composers</Link>
          <Link to="/favorites">Favorite Composers</Link>
        </nav>
        <Switch>
          <Route path="/essentials">
            <ComposersGrid />
          </Route>
          <Route path="/popular">
            <ComposersGrid />
          </Route>
          <Route path="/favorites">
            <ComposersGrid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
