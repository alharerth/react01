import logo from './logo.svg';
import './App.css';
import NewPage from './newPage';
import ResponsiveAppBar from './nav';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewPage/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      
    </div>
  );
}

export default App;
