import React, { useContext, useEffect, useState } from "react";
import { deleteTodoTask, getAllTodos } from "../utils/services";
import { Context } from "../utils/Context";
import "./Landing.css";
import "@material-ui/core";
import "@material-ui/icons";
import "react-bootstrap";
import { AddCircle, CheckCircle, Create, Delete } from "@material-ui/icons";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

const Landing = () => {
  const { state, dispatch } = useContext(Context);
  const [modalShow, setModalShow] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [findedObject, setFindedObject] = useState("");

  useEffect(() => {
    getAllTodos("calltodo", dispatch);
  }, [dispatch]);
  const todo = state.todos;

  const deleteHandler = (id) => {
    deleteTodoTask(id, dispatch);
  };

  const editHandler = (id) => {
    console.log("edit", id);
    setFindedObject(state.todos.find((fi) => fi.id == id));
    setEditModal(true);
  };
  return (
    <div className="landing-cont">
      <div className="landing-center">
        <div className="upper-cont">
          <div className="title-bar">
            <div className="title">
              <p className="task">Task</p>
              <p className="dash">Dashboard</p>
            </div>
            <div>
              <AddCircle
                onClick={() => setModalShow(true)}
                style={{ fontSize: 40, color: " rgb(1, 202, 202)" }}
              ></AddCircle>
              <AddTask show={modalShow} onHide={() => setModalShow(false)} />
              <EditTask
                show={editModal}
                findedObject={findedObject}
                onHide={() => setEditModal(false)}
              />
            </div>
          </div>
          <div className="selector">
            <button
              className="button"
              style={{ background: "rgb(1, 202, 202)" }}
            >
              All
            </button>
            <button className="button">Tasks</button>
            <button className="button">Priorities</button>
            <button className="button">Completed</button>
            <button className="button">Deleted</button>
          </div>
        </div>
        <div className="lower-cont">
          {todo.map((disc) => (
            <div key={disc.id} className="task-tab">
              <div className="ch-di">
                <CheckCircle
                  style={{ fontSize: 30, color: " dimgrey", margin: '10px 10px' }}
                ></CheckCircle>
                <div className="disc">{disc.text}</div>
              </div>
              <div className="edit-del">
                <Create
                  style={{
                    fontSize: 30,
                    color: " lightgrey",
                    marginRight: "5px",
                  }}
                  onClick={() => editHandler(disc.id)}
                ></Create>
                <Delete
                  style={{ fontSize: 30, color: " lightgrey" }}
                  onClick={() => deleteHandler(disc.id)}
                ></Delete>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
