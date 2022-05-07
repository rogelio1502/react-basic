import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const new_task = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.addTask(new_task);
    this.setState({ title: "" });
    this.setState({ description: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Write a Task..."
          onChange={this.onChange}
          value={this.state.title}
          name="title"
        ></input>
        <br></br>
        <textarea
          placeholder="Write a description..."
          onChange={this.onChange}
          value={this.state.description}
          name="description"
        ></textarea>
        <br></br>
        <button type="submit">Save a Task</button>
      </form>
    );
  }
}

export default TaskForm;
