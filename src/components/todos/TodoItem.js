import React from 'react';
import '../../styles/styles.css';

function TodoItem({todo, dispatch}) {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <input className="ms-2 btn-light"
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "flip", payload: { id: todo.id } })
                }
              />
            </td>
            <td>
              <span className="ms-0 ps-0 text-color"
                style={{
                  textDecoration: todo.complete ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </td>
            <td>
              <button className="b-col border-light"
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: todo.id } })
                }
              >
                <i class="bi bi-x-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItem;
