import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './Addtodos';

class App extends Component {
  state = {
    todos : [
      {
        todocaption: "Learn react" , 
        iscompleted:true
      },
      {
        todocaption: "Build Todo App" , 
        iscompleted:true
      }
    ]
  }

  checkTodo = (id) =>{
    console.log("Inside check");
    let newtodos = [...this.state.todos];
    var status = newtodos[id].iscompleted;
    newtodos[id].iscompleted = !status;
    this.setState({
      todos:newtodos
    })
  }
  editTodo = (i,event) =>{
    //console.log("abc event = " + event + " key = "+ i);
    let newtodos = [...this.state.todos];
    newtodos[i].todocaption = event.target.value; 
    this.setState({
      todos : newtodos
    })
  }
  deleteTodo = (id) =>{ 
    let newtodos = [...this.state.todos];
    newtodos.splice(id, 1);
    this.setState({todos: newtodos});
  }
  addNewTodo = (newTodo) =>{
    // newTodo.id = Math.random();
    let newtodos = [...this.state.todos,newTodo];
    this.setState({
      todos:newtodos
    })
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1 className="mainhead"> Todos</h1>
        <AddTodos addNewTodo={this.addNewTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo} editTodo={this.editTodo}/>
        
      </div>
    );
  }
}

export default App;
