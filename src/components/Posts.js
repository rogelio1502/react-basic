import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ data: data });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.data.map((e) => {
            return (
              <div>
                <h1>{e.id}</h1>
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
