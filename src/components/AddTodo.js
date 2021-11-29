import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "../redux/actions/TodoActions";
const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [todo, settodo] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    settodo({...todo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    settodo({ title: "", description: "" })
   navigate('/')
   
  };
  return (
    <div className="container mb-5">
      <h1>ADD TODO</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={todo.title }
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-4">
          <label>Description</label>
          <textarea
            type="text"
            onChange={handleChange}
            name="description"
            value={todo.description}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <button className="form-control btn-success btn btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
