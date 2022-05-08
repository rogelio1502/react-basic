import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import TaskForm from "./components/TaskForm";

import Tasks from "./components/Tasks";
import tasks from "./sample/task.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Posts />}></Route>
            <Route
              exact
              path="/tasks"
              element={
                <>
                  <TaskForm addTask={this.addTask}> </TaskForm>
                  <Tasks
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    checkDone={this.checkDone}
                  ></Tasks>
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
