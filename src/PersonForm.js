import React, { useState } from "react";
import contactServer from "./services/contacts";
import uuid from "react-uuid";

const PersonForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  //when form is submitted
  const onSubmit = e => {
    e.preventDefault(); //prevent default

    const dupl = persons.filter(person => person.name === newName); //check if there is duplicate.. which will at first index (not efficient though..lol)
    const newPerson = { id: uuid(), name: newName, phone: newPhoneNumber };

    if (!dupl[0]) {
      //create the person object and assign id
      const newPersons = [
        ...persons,
        { id: uuid(), name: newName, phone: newPhoneNumber },
      ]; //uuid to gen ID

      //make post request to create contact
      contactServer
        .create(newPerson)
        .then(response => setPersons([...persons, response])); //set persons state with the response
    } else {
      //if to update
      const confrm = window.confirm(
        `${newName} is already added to the phone book, replace the old number with the one?`
      );
      if (confrm) {
        //update and set the persons state (displayed contacts list)
        contactServer
          .update(dupl[0].id, newPerson)
          .then(response =>
            contactServer.getAll().then(results => setPersons(results))
          );
      }
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
