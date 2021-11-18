import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';
import '../../styles/styles.css';
import Footer from './footer';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  return (
    <div className="bg-full">
      <div className="bg-lilac shadow-sm ">
        <h1 className="py-4 container text-light">Simple TodoApp</h1>
      </div>
      <div className="container ">
        <form className="row g-2 shadow border mt-4 pb-3 ps-3" onSubmit={handleSubmit}>
          <div className="col-auto me-2">
            <p
              type="text"
              readonly
              className="form-control-plaintext fw-bold fs-4 text-color"
            >Add Your Todo</p>
          </div>
          <div className="col-sm-7 pt-2">
            <input
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="form-control btn-light"
              placeholder="Add here..."
            />
          </div>
          <div className="col-auto pt-2">
            <button type="submit" className="btn btn-light text-light bg-lilac position-absolute ">
              Add Todo
            </button>
          </div>
        </form>

        <div className="container shadow border mt-4">
        <table className="table mt-3">
          <thead>
            <tr className="text-color">
              <th scope="col"className="pe-3">Cek</th>
              <th scope="col"className="">Activity</th>
              <th></th>
              <th scope="col" className="ps-3">Delete</th>
            </tr>
          </thead>
        </table>
      
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Todos;



