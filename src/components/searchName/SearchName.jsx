import React, { useState, useEffect } from "react";

const api = "https://jsonplaceholder.typicode.com/users";

const SearchName = () => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((parsed) => {
        setUser(parsed);
      });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.trim() === "") {
      setProduct([]);
      return;
    }

    const filteredUsers = user.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setProduct(filteredUsers);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search</h1>
      <input type="text" value={query} onChange={handleSearch} />
      {product.length > 0 ? (
        product.map((ind) => {
          return <div key={ind.id}>{ind.name}</div>;
        })
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchName;
