import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([""]);
  const [text, setText] = useState("");
  const onTextChannnge = ({ target: { value } }) => {
    setText(value)
  }
  const addTask = () => {
    setTodoList([
      ...todoList,
      text
    ])
    setText("");
  }
  const removeTodo = (index) => {
    let todo = [...todoList];
    todo.splice(index, 1);
    setTodoList(todo);
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={onTextChannnge} />
      <button onClick={addTask}>Add task</button>
      <TodoList todoList={todoList} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
