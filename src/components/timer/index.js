import React, {Component} from 'react'
import Timer from './timer'
import Todo from './todo'

class TimerApp extends Component {
  render () {
    return (
      <div className="timer-app">
        <Timer/>
        <Todo/>
      </div>
    )
  }
}

export default TimerApp;
