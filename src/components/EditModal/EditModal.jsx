import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditModal = ({ show, setShow, handleEditTask, taskToedit }) => {
  const [task, setTask] = useState(taskToedit.task);
  function save() {
    let editedTask = {
      task,
      id: taskToedit.id,
    };
    handleEditTask(editedTask);
  }
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={(event) => setTask(event.target.value)}
            type="text"
            value={task}
            placeholder="Edit task"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button onClick={() => save()} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
