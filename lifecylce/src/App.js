import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "mhuckstepp",
      username: "mhuckstepp",
      user: {},
      followers: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ ...this.state, input: e.target.value });
  };

  submitHandler = (e) => {
    this.setState({ ...this.state, username: this.state.input });
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        if (res.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          user: data,
        });
      })
      .catch((err) => console.log(err));

    fetch(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        if (res.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          followers: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1> Max's Github info and followers </h1>
        {this.state.user.name ? (
          <span>{this.state.user.name} </span>
        ) : (
          <h1> Loading </h1>
        )}
        {this.state.user.url ? (
          <span>{this.state.user.url} </span>
        ) : (
          <h1> Loading </h1>
        )}
        {this.state.user.location ? (
          <span>{this.state.user.location} </span>
        ) : (
          <h1> Loading </h1>
        )}
        {this.state.followers.map((follower) => {
          return <h1 key={follower.id}>{follower.login}</h1>;
        })}
        <input
          name="userSearch"
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}> Change user</button>
      </div>
    );
  }
}

export default App;
