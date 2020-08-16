import React, { useState } from "react";
import Details from "../Details";

import {
  Container,
  Poster,
  TextSection,
  Title,
  Date,
  Overview,
} from "../styles/styles";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_url: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  let dateText = "";
  if (movie.release_date) {
    const date = movie.release_date.split("-");
    dateText = `${Number(date[2])} de ${months[Number(date[1]) - 1]} de ${
      date[0]
    }`;
  }

  return (
    <>
      <Details
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        title={movie.title}
        sinopse={movie.overview}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        bigger_poster_url={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      />
      <Container onClick={() => setModalIsOpen(true)}>
        <Poster poster_url={movie.poster_url}></Poster>
        <TextSection>
          <Title>{movie.title}</Title>
          <Date>{dateText}</Date>
          <Overview>
            <p>{movie.overview}</p>
          </Overview>
        </TextSection>
      </Container>
    </>
  );
};

export default MovieItem;
