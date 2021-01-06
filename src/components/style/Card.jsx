import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 190px;
  background: linear-gradient(
    180deg,
    rgba(34, 40, 49, 1) 0%,
    rgba(34, 40, 49, 0) 100%
  );
`;

const Card = ({ onClick, movie }) => (
    <section onClick={onClick}>
      <Overlay />
      <div>{movie.year}</div>
      <div>{movie.director}</div>
      <div>{movie.name}</div>
    </section>
  );
  
  export default Card;