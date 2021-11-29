import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../redux/actions/TodoActions";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const handledelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1 className="bg-secondary text-white ">LIST TODO</h1>
      <div className="d-flex justify-content-end m-1">
        <Link to="/add">
          {" "}
          <button className=" btn btn-secondary btn-block">ADD TODO</button>
        </Link>
      </div>
      <div className="ml-5 mr-5">
        <ul className="nav nav-tabs  text-white">
          <li className="nav-item">
            <a className="nav-link " href="#">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Active
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Completed
            </a>
          </li>
        </ul>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>description</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todo.todos.length > 0 ? (
            todo.todos.map((c, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>
                  <Link to={`edit/${c.id}`}>
                    <button className="btn btn-success text-white">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-success text-white"
                    onClick={() => handledelete(c.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <span>not found</span>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
