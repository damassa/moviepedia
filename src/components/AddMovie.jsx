import Modal from "./style/Modal";
import Form from "./style/Form";
import Input from "./style/Input";
import Button from "./style/Button";
import { moviesRef } from "../firebase";
import { useState } from "react";
import { getFieldValue } from "../utils";

const AddMovie = ({ clickedOut }) => {
  const [loading, setLoading] = useState(false);

  const insert = async (e) => {
    e.preventDefault();
    setLoading(true);
    const image = getFieldValue("image", false);
    const name = getFieldValue("name");
    const director = getFieldValue("director");
    const year = getFieldValue("year");

    const data = { image, name, director, year };

    try {
      await moviesRef.push(data);
      clickedOut();
    } catch (error) {
      alert("Error");
    }
    setLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <h1>
        Add a new movie
      </h1>
      <Form onSubmit={insert}>
        <Input type="text" name="image" placeholder="image" />
        <Input type="text" name="name" placeholder="name" />
        <Input type="text" name="director" placeholder="director" />
        <Input
          type="text"
          name="year"
          placeholder="year"
        />
        <Button type="submit" loading={loading}>
          add
        </Button>
      </Form>
    </Modal>
  );
};

export default AddMovie;