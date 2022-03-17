import React, { useState } from "react";

const ToDo = (props) => {
  let [task, setTask] = useState("");

  function handleAddTask() {
    if (task == "") {
      alert("Enter something");
      return;
    }
    let newTask = {
      task,
      id: Date.now(),
    };
    props.handlerTask(newTask);
    setTask("");
  }

  return (
    <div>
      <input
        onChange={(event) => setTask(event.target.value)}
        type="text"
        value={task}
        placeholder="task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default ToDo;
