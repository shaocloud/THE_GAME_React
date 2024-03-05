//import logo from './logo.svg';
import './App.css';
import Voting from './Voting';
import GameState from './GameState';
import Naming from './Naming';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameState />
        <Voting />
        <Naming />
      </header>
    </div>
  );
}

export default App;
