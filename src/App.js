import React, { useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import ToDoList from "./components/ToDolist/ToDoList";
import EditModal from "./components/EditModal/EditModal";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [taskToedit, setTaskToEdit] = useState(null);
  function handlerTask(newObj) {
    let newTodos = [...tasks];
    newTodos.push(newObj);
    setTasks(newTodos);
  }
  console.log(tasks);

  function handleDeleteTask(id) {
    let newTaskArray = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTaskArray);
  }

  function handleEditTask(editedTask) {
    let newTaskArray = tasks.map((item) => {
      if (editedTask.id !== item.id) {
        return item;
      } else {
        return editedTask;
      }
    });
    setTasks(newTaskArray);
    setShow(false);
  }

  function getTaskToEdit(task) {
    setTaskToEdit(task);
    setShow(true);
  }

  return (
    <div className="App">
      <ToDo handlerTask={handlerTask} />
      <ToDoList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        getTaskToEdit={getTaskToEdit}
      />
      {taskToedit ? (
        <EditModal
          show={show}
          setShow={setShow}
          handleEditTask={handleEditTask}
          taskToedit={taskToedit}
        />
      ) : null}
    </div>
  );
}

export default App;
