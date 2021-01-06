import Modal from './style/Modal';
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
      const image = getFieldValue("image");
      const name = getFieldValue("name");
      const director = getFieldValue("director");
      const year = getFieldValue("year");

      const data = { image, name, director, year };

      await moviesRef.child(movie.id).update(data);
      clickedOut();
    } catch (error) {
      console.log("Error");
    }

    setUpdateLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <h2>
        Edit your movie
      </h2>
      <form onSubmit={updateMovie}>
        <input
          type="text"
          name="image"
          placeholder="image"
          defaultValue={movie.image}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={movie.name}
        />
        <input
          type="text"
          name="director"
          placeholder="director"
          defaultValue={movie.director}
        />
        <input
          type="text"
          placeholder="year"
          defaultValue={movie.year}
        />
        <button type="submit" loading={updateLoading}>
          change
        </button>
        <button
          type="button"
          color="red"
          onClick={deleteMovie}
          loading={deleteLoading}
        >
          delete
        </button>
      </form>
    </Modal>
  );
};

export default EditMovie;