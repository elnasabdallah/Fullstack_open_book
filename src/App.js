import React, { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import contactServer from "./services/contacts.js";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    contactServer.getAll().then(response => {
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setPersons={setPersons} />
      <h2>Form</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
