import React, { useState } from "react";

const PersonForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    const dupl = persons.filter(person => person.name === newName);

    if (!dupl[0]) {
      const newPersons = [...persons, { name: newName, phone: newPhone }];
      setPersons(newPersons);
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
        <input name='phone' onChange={e => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
