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

//code for conditional rendering of log in/out button and state:

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedIn: false
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       return {
//         loggedIn: !prevState.loggedIn
//       };
//     });
//   };

//   render() {
//     let buttonText = this.state.loggedIn
//       ? "LOG OUT MOTHERFUCKER!"
//       : "LOG IN MOTHERFUCKER!";

//     let displayText = this.state.loggedIn
//       ? "CONGRATULATIONS MOTHERFUCKER, YOU'RE LOGGED IN!"
//       : "DAMN MOTHERFUCKER, YOU'RE LOGGED OUT!'";

//     return (
//       <div>
//         <h1>{displayText}</h1>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     );
//   }
// }
