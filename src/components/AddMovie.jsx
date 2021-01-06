import Modal from "./style/Modal";
import { moviesRef } from "../firebase";
import { useState } from "react";
import { getFieldValue } from "../utils";

const AddMovie = ({ clickedOut }) => {
  const [loading, setLoading] = useState(false);

  const insert = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = getFieldValue("name");
    const director = getFieldValue("director");
    const year = getFieldValue("year");

    const data = { name, director, year };

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
      <form onSubmit={insert}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="director" placeholder="director" />
        <input
          type="text"
          name="year"
          placeholder="year"
        />
        <button type="submit" loading={loading}>
          add
        </button>
      </form>
    </Modal>
  );
};

export default AddMovie;