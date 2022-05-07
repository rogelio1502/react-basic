import React from "react";
import Task from "./Task";
class Tasks extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((e) => (
          <Task
            task={e}
            key={e.id}
            delete={this.props.delete}
            checkDone={this.props.checkDone}
          ></Task>
        ))}
      </div>
    );
  }
}

export default Tasks;
