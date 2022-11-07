import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch("http://asfaltirovanie7-24.ru/api/categories/show/" + id)
      .then((x) => x.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Single Page</h1>
    </div>
  );
};

export default SinglePage;
