import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";

// const UNSPALASH_API = process.env.REACT_UNSPLASH_API_KEY; THIS WAS NOT WORKING I TRIED TO CORRECT IT 

const App = () => {
  const [word, setWord] = useState("");
  const[images, setImages] = useState("")

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=EMJtBuNU7ngIkcA_AdS0rqJVofAHQVXxqdKIbxou66c`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
      setWord('')
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
