import React, {Component} from 'react'

class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
    // console.log(e.target.value)
  }

  handleSubmit (e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  render() {
    return (
      <div className="todo">
        <h3>ToDo</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange}
                   type="text"
                   value={this.state.text}/>
          </div>
          <div>
            <button>Add# {this.state.items.length + 1}</button>
          </div>
        </form>

      </div>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}


export default Todo
