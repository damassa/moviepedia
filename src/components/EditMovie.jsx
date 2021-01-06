import Modal from './style/Modal';
import Form from "./style/Form";
import Input from "./style/Input";
import Button from "./style/Button";
import { moviesRef } from "../firebase";
import { useState } from "react";
import { getFieldValue } from "../utils";

const EditMovie = ({ clickedOut, movie }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const deleteMovie = async () => {
    setDeleteLoading(true);
    try {
      await moviesRef.child(movie.id).remove();
      clickedOut();
    } catch (error) {
      console.log("Error during deletion");
    }
    setDeleteLoading(false);
  };

  const updateMovie = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);

    try {
      const image = getFieldValue("image", false);
      const name = getFieldValue("name");
      const director = getFieldValue("director");
      const year = getFieldValue("year");

      const data = { image, name, director, year };

      await moviesRef.child(movie.id).update(data);
      clickedOut();
    } catch (error) {
      console.log(error);
    }

    setUpdateLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <h2>
        Edit your movie
      </h2>
      <Form onSubmit={updateMovie}>
        <Input
          type="text"
          name="image"
          placeholder="image"
          defaultValue={movie.image}
        />
        <Input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={movie.name}
        />
        <Input
          type="text"
          name="director"
          placeholder="director"
          defaultValue={movie.director}
        />
        <Input
          type="text"
          name="year"
          placeholder="year"
          defaultValue={movie.year}
        />
        <Button type="submit" loading={updateLoading}>
          change
        </Button>
        <Button
          type="button"
          color="red"
          onClick={deleteMovie}
          loading={deleteLoading}
        >
          delete
        </Button>
      </Form>
    </Modal>
  );
};

export default EditMovie;