import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Just Do It",
        isCompleted: false
      },
      {
        id: 2,
        title: "bring it on baby",
        isCompleted: false
      },
      {
        id: 3,
        title: "wanna hang out tonight at my plave",
        isCompleted: false
      }
    ]
  };
  checkMark = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  deleteNode = (id) => {
    console.log(id)
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
        checkMark={this.checkMark} 
        deleteNode={this.deleteNode}
        />
      </div>
    );
  }
}

export default App;
