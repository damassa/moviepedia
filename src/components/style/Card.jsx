import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 190px;
`;

const Director = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 14px;
`;

const Year = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
`;

const Title = styled.h1`
  padding: 20px 50px;
  font-size: 16px;
  text-align: center;
  margin-top: -30px;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

const Card = ({ onClick, movie }) => (
    <CardContainer onClick={onClick}>
      <Overlay />
      <Title>{movie.name}</Title>
      <Director>{movie.director}</Director>
      <Year>{movie.year}</Year>
      <Image src={movie.image}/>
    </CardContainer>
  );
  
  export default Card;