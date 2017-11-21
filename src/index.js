import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import Hello from './components/hello';
import registerServiceWorker from './startup/registerServiceWorker';

class App extends React.Component {
  render () {
    return (
      <div className="wrap-component">
        <Hello name="koo"/>
        <Hello name="koo"/>
        <Hello name="koo"/>
        <Hello name="koo"/>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
