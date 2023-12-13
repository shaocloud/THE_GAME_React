//import logo from './logo.svg';
import './App.css';
import Voting from './Voting';
import GameState from './GameState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameState />
        <Voting />
      </header>
    </div>
  );
}

export default App;
