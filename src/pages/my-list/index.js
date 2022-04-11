
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import CategoryTitle from "../../components/CategoryTitle";
import withAuth from "../../HOC/withAuth";
import Movie from "../../components/Slider/MovieCard";

const Index = () => {
  const [myList, setMyList] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mylist")) : []);

  const deleteItem = (movie) => {
    const filteredList = myList.filter((movie) => movie.id !== movie.id);
    localStorage.setItem("mylist", JSON.stringify(filteredList));
    setMyList(filteredList);
  }

  useEffect(() => {
    setMyList(JSON.parse(localStorage.getItem("mylist")));
  }, []);

  return (
    <div className="page__mylist">
      <CategoryTitle title="Ma liste" />
      {myList ? (
        <div className="grid">
          {myList.map((myList) => {
            return <Movie key={myList.id} movie={myList} />;
          })}
        </div>
      ) : (
        <center>
          <p className="text__center">Votre watchlist est vide.</p>
        </center>
      )}
    </div>
  );
};

export default withAuth(Index);