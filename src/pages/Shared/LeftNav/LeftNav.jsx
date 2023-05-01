import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div>
      <h4>All categories</h4>
      {categories.map((categorie) => (
        <p key={categorie.id}>
          <Link>{categorie.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;