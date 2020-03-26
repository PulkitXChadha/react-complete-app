import React from "react";

import Person from "./Person/Person.jsx";
const Persons = props => {
  console.log(`[Persons.jsx] rendering...`);
  return props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      >
        My Hobbies: Racing
      </Person>
    );
  });
};

export default Persons;
