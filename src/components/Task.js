import React from "react";
import "./Task.css";
import PropTypes from "prop-types";

class Task extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div className={task.done === true ? "green" : "red"}>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <input
          type="checkbox"
          onClick={this.props.checkDone.bind(this, task.id)}
          checked={task.done}
        />
        <button
          className="remove"
          onChange={this.props.delete.bind(this, task.id)}
        >
          X
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
