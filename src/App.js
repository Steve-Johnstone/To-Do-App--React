import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import todosData from "./components/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  handleChange = id => {
    this.setState(prevState => {
      const newToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newToDos
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem handleChange={this.handleChange} key={item.id} item={item} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;

// const newTodos = this.state.todos.map(todo =>
//   todo.id === id ? { ...todo, completed: !todo.completed } : todo
// );
// this.setState({ todos: newTodos });
