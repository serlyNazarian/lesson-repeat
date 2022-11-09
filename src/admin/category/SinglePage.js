import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})
  useEffect(() => {
    fetch("http://asfaltirovanie7-24.ru/api/categories/show/" + id)
      .then((x) => x.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setItem(data.category);
        }
      });
  }, []);
  return (
    <div>
      <h1>{item.id}</h1>
      <h1>{item.name}</h1>
    </div>
  );
};

export default SinglePage;
