import React from "react";
import contactServer from "./services/contacts";

const Persons = ({ persons, setPersons }) => {
  //handle delete
  const handelDelete = person => {
    //confirmation
    if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
      contactServer
        .delete_obj(person.id)
        .then(response =>
          contactServer.getAll().then(response => setPersons(response))
        );
    }
  };
  return (
    <div>
      {persons.map(person => (
        <li key={person.name}>
          {person.name} {person.phone}
          <button onClick={() => handelDelete(person)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default Persons;
