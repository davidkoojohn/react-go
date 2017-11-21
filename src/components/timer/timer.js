import React, {Component} from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: 0
    }
  }

  tick () {
    this.setState((prev) => ({
      seconds: prev.seconds + 1
    }))
  }

  componentDidMount () {
    // this.interval = setInterval(() => this.tick(), 1000)
    /*
    this.interval = setInterval(() => {
      this.setState((prev) => ({
        seconds: prev.seconds + 1
      }))
    }, 1000)
    */
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div className="timer">
        Seconds: {this.state.seconds}
      </div>
    )
  }
}

export default Timer;