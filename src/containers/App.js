import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons.jsx";
import Cockpit from "../components/Cockpit/Cockpit.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] - Constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ]
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] - getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] - componentDidMount");
  }
  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  handleDeletePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  handlePersonToggle = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {
    console.log("[App.js] - render");
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.handleDeletePerson}
          changed={this.handleNameChange}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.handlePersonToggle}
        />
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is really Working'))
  }
}

export default App;
