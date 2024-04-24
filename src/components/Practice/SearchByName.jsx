import React, { useEffect, useState } from "react";

const api = "https://jsonplaceholder.typicode.com/users";

const SearchByName = () => {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((parsed) => setData(parsed));
  }, []);

  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    setsearch(searchString);
  
    if (searchString === "") {
      setUser([]);
      return;
    }
  
    const filteredUsers = data.filter((user) =>
      user.name.toLowerCase().includes(searchString)
    );
    setUser(filteredUsers);
  };
  return (
    <>
      <div>
        <h1>search by name </h1>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div>
        {user.map((e) => (
          <div key={e.id}>{e.name}</div>
        ))}
      </div>
    </>
  );
};

export default SearchByName;
