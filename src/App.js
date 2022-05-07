import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

import Tasks from "./components/Tasks";
import tasks from "./sample/task.json";

class App extends React.Component {
  state = {
    tasks: tasks,
  };

  addTask = (task) => {
    task.id = this.state.tasks.length;
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter((t) => t.id !== id) });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    });

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask}> </TaskForm>
        <Tasks
          tasks={this.state.tasks}
          delete={this.deleteTask}
          checkDone={this.checkDone}
        ></Tasks>
      </div>
    );
  }
}

export default App;
