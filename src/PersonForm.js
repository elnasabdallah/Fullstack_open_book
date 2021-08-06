import React, { useState } from "react";
import contactServer from "./services/contacts";
import uuid from "react-uuid";

const PersonForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const dupl = persons.filter(person => person.name === newName);

    if (!dupl[0]) {
      //create the person object and assign id
      const newPersons = [
        ...persons,
        { id: uuid(), name: newName, phone: newPhoneNumber },
      ];
      contactServer.create(newPersons).then(response => console.log(response));

      setPersons(newPersons); //set frontend state
    } else {
      alert(`${newName} already exist`);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input name='name' onChange={e => setNewName(e.target.value)} />
      </div>
      <br />

      <div>
        number:{" "}
        <input name='phone' onChange={e => setNewPhoneNumber(e.target.value)} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
