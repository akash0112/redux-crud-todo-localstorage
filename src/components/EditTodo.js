import React, {  useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateTodo } from "../redux/actions/TodoActions";
const EditTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) =>
    state.todo.todos.find((user) => user.id === id)
  );
  const [todo, settodo] = useState({
    title: user.title,
    description: user.description,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    settodo({ ...todo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id:id,title:todo.title,description:todo.description}));
    settodo({ title: "", description: "" });
    navigate("/");
  };
  return (
    <div className="container mb-5">
      <h1>EDIT TODO</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={todo.title}
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
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
