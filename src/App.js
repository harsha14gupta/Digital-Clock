import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date() };
  }

  // As soon as the Clock is mounted.
  // Start the interval "timer".
  // Calls tick() every second.
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  // Clear the interval "Timer" of clock before Unmounting
  // A memory efficient step.
  //Called just before the component is unmounted or destroyed
  //Will never be re-rendered
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Updating the state of  currentTime
  // invokes re-render after 1000 miliseconds
  //didn't use componentDidUpdate
  //as react limits its re-rendering
  //so that the function doesn't go in an infinite loop
  tick() {
    this.setState({
      currentTime: new Date()
    });
  }
  //Handling the render of component from UI
  //Pure life cycle method
  render() {
    return (
      <div>
        <h2>Girl Code It : Milestone 6 - Assignment</h2>
        <h1 className="App">
          <u>Digital Clock using React Js</u>
        </h1>
        <h2 className="Time">{this.state.currentTime.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;
