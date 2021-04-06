import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../utils/Context";
import { createTodoTask, editTodoTask } from "../utils/services";
import "./AddTask.css";

function EditTask(props) {
  const [description, setDescription] = useState("");
  const { state, dispatch } = useContext(Context);

  const updateHandler = () => {
    let data = {
      id: props.findedObject.id,
      text: description,
    };
    editTodoTask(data, dispatch);
    props.onHide();
    console.log("object");
  };

  useEffect(() => {
    if (props.findedObject) {
      setDescription(props.findedObject.text);
    }
  }, [props.findedObject]);
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
            Edit Your Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Type here...."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            {/* <Checkbox color='primary'></Checkbox>
        Mark as Priority Task */}
            {/* <FormControlLabel
              value="end"
              control={<Checkbox size="small" color="primary" />}
              label={
                <span style={{ fontSize: "small" }}>Mark as Priority Task</span>
              }
              labelPlacement="end"
              style={{ fontSize: "small" }}
            /> */}
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
            onClick={() => updateHandler()}
          >
            Update
          </Button>
          <Button
            style={{ padding: "0px 35px" }}
            variant="light"
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

export default EditTask;
