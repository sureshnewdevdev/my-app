import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import ParentComponent from './ParentComponent'
import Parent2 from './Parent2';
import TaskList from './TaskList';
import InterestCalculator from './InterestCalculator';
import FetchUser from './FetchUser';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Banner></Banner> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Parent2></Parent2> */}
      <div>
      {/* <h1 style={{ textAlign: 'center' }}>Interest Calculator</h1> */}
      {/* <InterestCalculator /> */}
      <FetchUser/>
    </div>
    </div>
  );
}

export default App;

