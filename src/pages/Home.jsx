import { useEffect, useState } from "react";
import { moviesRef, handleSnapshot } from "../firebase";
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import EditMovie from '../components/EditMovie';
import Card from "../components/style/Card";
import UIForm from '../components/style/Form';
import Button from '../components/style/Button';
import Input from '../components/style/Input';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: purple;
  text-transform: uppercase;
  font-size: 28px;
  margin: 50px 0 20px;
  padding: 15px 0;
  width: 100%;
  text-align: center;
`;

const List = styled.div`
  width: 100%auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Form = styled(UIForm)`
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;
  label {
    color: #fff;
  }
`;

const Search = styled(Button)`
  margin-left: 20px;
  transform: scale(1.2);
`;


const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderField, setOrderField] = useState("name");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleMovies = (snapshot) => {
    const allMovies = [];
    snapshot.forEach((snap) => {
      allMovies.push(handleSnapshot(snap));
    });

    setMovies(allMovies);
  };

  const getMovies = () => {
    moviesRef
      .orderByChild(orderField)
      .startAt(search)
      .endAt(`${search}\uf8ff`)
      .on("value", handleMovies);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = document.querySelector("input[name=search]").value;
    setSearch(text.toLowerCase());

    setLoading(false);
  };

  useEffect(getMovies, [orderField, search]);

  const ListMovies = () =>
    movies.map((movie) => (
      <Card onClick={() => setSelectedMovie(movie)} movie={movie} key={movie.id} />
    ));

  return (
    <Container>
      <Navbar />
      <Title>My movies</Title>

      <Form direction="row" onSubmit={searchMovies}>
        <div>
          <Input
            name="search"
            type="text"
            placeholder="Search your movie"
            light
          />
          <Search loading={loading} type="submit">
            search
          </Search>
        </div>

        <div>
          <label>Order by: </label>
          <select
            id="orderBy"
            name="orderBy"
            value={orderField}
            onChange={(e) => setOrderField(e.target.value)}
            light
          >
            <option value="name">Name</option>
            <option value="director">Director</option>
            <option value="year">Year</option>
          </select>
        </div>
      </Form>

      {movies.length ? (
        <List>
          <ListMovies />
        </List>
      ) : (
        <p>No movies found =/</p>
      )}

      {selectedMovie && (
        <EditMovie
          movie={selectedMovie}
          clickedOut={() => setSelectedMovie(null)}
        />
      )}
    </Container>
  );
};

export default Home;