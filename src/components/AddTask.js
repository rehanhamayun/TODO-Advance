import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../utils/Context";
import { createTodoTask } from "../utils/services";
import "./AddTask.css";

function AddTask(props) {
  const [description, setDescription] = useState("");
  const { state, dispatch } = useContext(Context);

  const onCreateHandler = () => {
    let data = {
      id: Math.floor(Math.random() * 1000000 + 1),
      text: description,
    };
    createTodoTask(data, dispatch);
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Type here...."
            onChange={(e) => setDescription(e.target.value)}
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            {/* <Checkbox color='primary'></Checkbox>
        Mark as Priority Task */}
            <FormControlLabel
              value="end"
              control={
                <Checkbox size="small" style={{ color: "rgb(1, 202, 202)" }} />
              }
              label={
                <span style={{ fontSize: "small" }}>Mark as Priority Task</span>
              }
              labelPlacement="end"
              style={{ fontSize: "small" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginBottom: "20px" }}>
          <Button
            style={{
              marginRight: "20px",
              padding: "0px 35px",
              background: "rgb(1, 202, 202)",
              border: "none",
            }}
            onClick={() => onCreateHandler()}
          >
            Create
          </Button>
          <Button
            style={{ padding: "0px 35px" }}
            variant="light"
            onClick={props.onHide}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddTask;
