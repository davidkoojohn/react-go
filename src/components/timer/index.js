import React, {Component} from 'react'
import Timer from './timer'
import Todo from './todo'
import MD from './md'

class TimerApp extends Component {
  render () {
    return (
      <div className="timer-app">
        <Timer/>
        <Todo/>
        <MD/>
      </div>
    )
  }
}

export default TimerApp;
