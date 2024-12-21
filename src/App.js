import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <IngatlanProvider>
        <h1>Ingatlanok Listája</h1>
        <IngatlanTablazat />
      </IngatlanProvider>
    </div>
  );
}

export default App;
