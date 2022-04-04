
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

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
        
      {myList ? (
            <div className="grid">
              {myList.map((listItem) => (
                <div className="grid__item">
                <div className="grid__img">
                  <img src={"https://image.tmdb.org/t/p/w500" +listItem.backdrop_path} alt={listItem.path}/>
                  </div>
                  </div>
              ))}
              </div>
      ) : (
        <p className="text__center">Votre liste des favoris est vide</p>
      )}
    </div>
  );
};

export default Index;