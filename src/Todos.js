import React from "react";


const Todos = (props) => {

  const { todos, deleteTodo, checkTodo,editTodo } = props;
  const TodoList = todos.length ? (
    todos.map((todo, i) => {
      return (
        <div className="todolist" key={i}>
          <span>
              {todo.iscompleted ? <input className="status" type="checkbox" checked onChange={()=>{checkTodo(i)}}/>
               :
               <input className="status" type="checkbox" onClick={() => {checkTodo(i)}}/>}
          </span>
          {todo.iscompleted ?( <input className="listitem strike" value={todo.todocaption} disabled/>) : (<input className="listitem" onChange={editTodo.bind(this,i)}  value={todo.todocaption} />)}
          <span className="cross" onClick={() => {deleteTodo(i)}}>X</span>
        </div>
      );
    })
  ) : (
    <p className="listitem">No Left Todo </p>
  );
  return <div>{TodoList}</div>;
};

export default Todos;
