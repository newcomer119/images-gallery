import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ImageCard from "./Components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

// const UNSPALASH_API = process.env.REACT_UNSPLASH_API_KEY; THIS WAS NOT WORKING I TRIED TO CORRECT IT
// ... existing code ...

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]); // Initialize as empty array instead of empty string

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=EMJtBuNU7ngIkcA_AdS0rqJVofAHQVXxqdKIbxou66c`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
      setImages(images.filter((image) => image.id !== id))
  }

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {/* THIS CLASS MT-4 GIVES MARGIN T MEANS TOP IN BOOTSTRAP */}
      <Container className="mt-4"> 
        <Row xs={1} md={2} lg={3}>
          {images &&
            images.map((image, i) => (
              <Col key={i} className="pb-4">  
                <ImageCard image={image} deleteImage={handleDeleteImage}/> 
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;

// ... existing code ...
