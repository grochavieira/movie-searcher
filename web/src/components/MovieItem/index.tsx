import React from "react";

import {
  Container,
  ImageSection,
  TextSection,
  Title,
  Data,
  Description,
} from "./styles";

export interface Movie {
  title: string;
  release_date: string;
  image: string;
  description: string;
}

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Container>
      <ImageSection>
        <img src={movie.image} alt="" />
      </ImageSection>
      <TextSection>
        <Title>{movie.title}</Title>
        <Data>{movie.release_date}</Data>
        <Description>{movie.description}</Description>
      </TextSection>
    </Container>
  );
};

export default MovieItem;
