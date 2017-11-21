import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import registerServiceWorker from './startup/registerServiceWorker';
import Hello from './components/hello/index';
import TimerApp from './components/timer/index'


class App extends React.Component {
  render () {
    return (
      <div className="wrap-component">
        <Hello name="koo"/>
        <TimerApp/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
