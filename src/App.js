import logo from './logo.svg';
import './App.css';
import SubscriptionAlert from './components/SubscriptionAlert/SubscriptionAlert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SubscriptionAlert
          alertTitle={`Your premium period will be renewed on test`}
          alertSubtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget blandit lacus, a mollis nibh. Cras nisl ante, egestas quis dui vel, varius.'}
          alertBtnAction={() => {console.log('test')}}
          alertBtnText={'Manage Subscription'}
        />
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
