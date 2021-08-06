import React, { useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
const initialContacts = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
];
const App = () => {
  const [persons, setPersons] = useState(initialContacts);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setPersons={setPersons} persons={initialContacts} />
      <h2>Form</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
