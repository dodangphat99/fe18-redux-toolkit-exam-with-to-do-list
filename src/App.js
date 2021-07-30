import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createToDoListAction,
  editToDoListAction,
  deleteToDoListAction,
} from "./redux-toolkit/actions";
import Item from "./Item";

function App() {
  const getTask = useSelector((state) => state.toDoListReducer.taskList);
  const dispatch = useDispatch();
  const [addTaskForm, setAddTaskForm] = useState({
    title: "",
    description: "",
  });

  function handleAddTask() {
    if (addTaskForm.title === "" || addTaskForm.description === "") {
      alert("NHẬP LẠI ĐI, AI CHO NHẬP RỖNGGGG !!!!!");
    } else {
      dispatch(createToDoListAction(addTaskForm));
      setAddTaskForm({
        title: "",
        description: "",
      });
    }
  }

  useEffect(() => {
    // console.log(getTask);
  }, [getTask]);

  function handleChangeValue(e) {
    const { name, value } = e.target;
    setAddTaskForm({
      ...addTaskForm,
      [name]: value,
    });
  }

  function handleEditTask(values, index) {
    dispatch(
      editToDoListAction({
        values,
        index,
      })
    );
  }

  function handleDeleteTask(index) {
    dispatch(
      deleteToDoListAction({
        payload: index,
      })
    );
  }
  function renderTaskList() {
    return getTask.map((taskItem, taskIndex) => {
      return (
        <Item
          key={`${taskIndex}-${taskItem.title}`}
          index={taskIndex}
          title={taskItem.title}
          description={taskItem.description}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      );
    });
  }

  return (
    <div style={{ width: 500, margin: "24px auto" }}>
      <h2>TO DO LIST APP</h2>
      <div
        style={{
          padding: "20px",
          border: "2px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Add card</h3>

        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => handleChangeValue(e)}
          value={addTaskForm.title}
        ></input>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => handleChangeValue(e)}
          value={addTaskForm.description}
        ></input>
        <button onClick={() => handleAddTask()} style={{ marginTop: "20px" }}>
          Add Task
        </button>
      </div>
      {renderTaskList()}
    </div>
  );
}

export default App;
