import logo from './logo.svg';
import './App.css';
import Voting from './Voting';
import GameState from './GameState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        State:
        <GameState />
        Voting:
        <Voting subtitle="This is the subtitle"/>
      </header>
    </div>
  );
}

export default App;
