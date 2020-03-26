import React, { PureComponent } from "react";
import Person from "./Person/Person.jsx";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.jsx] - getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.jsx] - shouldComponentUpdate");
    return nextProps.persons != this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.jsx] - getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.jsx] - componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.jsx] - componentWillUnmount");
  }
  render() {
    console.log(`[Persons.jsx] rendering...`);
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        ></Person>
      );
    });
  }
}

export default Persons;
