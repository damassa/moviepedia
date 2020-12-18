import { useEffect, useState } from "react";
import { moviesRef, handleSnapshot } from "../firebase";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderField, setOrderField] = useState("rating");
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
      <div onClick={() => setSelectedMovie(movie)} movie={movie} key={movie.id} />
    ));

  return (
    <div>
      <nav />
      <h1>My movies</h1>

      <form direction="row" onSubmit={searchMovies}>
        <div>
          <input
            name="search"
            type="text"
            placeholder="Search your movie"
            light
          />
          <button loading={loading} type="submit">
            Buscar
          </button>
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
      </form>

      {movies.length ? (
        <div>
          <ListMovies />
        </div>
      ) : (
        <p>Ops! Não encontramos nenhum jogo :/</p>
      )}

      {selectedMovie && (
        <div
          movie={selectedMovie}
          clickedOut={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;