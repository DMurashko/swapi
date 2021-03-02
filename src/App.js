import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Button from './Button';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/' render={ () => <Button />} />
            <Route path='/characters' render={ () => <Characters />} />
            <Route path='/character_data' render={ () => <CharacterData />} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
