import React, { useState } from "react";

const Filter = ({ setPersons, persons }) => {
  const [search, setSearch] = useState("");

  const onSearch = e => {
    setSearch(e.target.value);
  };
  const onKeyUp = () => {
    const newP = persons.filter(
      person => person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    console.log(newP);
    setPersons(newP);
  };

  return (
    <div>
      Filter shown with :{" "}
      <input
        name='filter'
        value={search}
        onChange={onSearch}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Filter;
