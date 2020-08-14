import React from "react";

import {
  Container,
  Poster,
  TextSection,
  Title,
  Data,
  Overview,
} from "../styles/styles";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_url: string;
  poster_path: string;
  overview: string;
}

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Container>
      <Poster poster_url={movie.poster_url}></Poster>
      <TextSection>
        <Title>{movie.title}</Title>
        <Data>{movie.release_date}</Data>
        <Overview>
          <p>{movie.overview}</p>
        </Overview>
      </TextSection>
    </Container>
  );
};

export default MovieItem;
