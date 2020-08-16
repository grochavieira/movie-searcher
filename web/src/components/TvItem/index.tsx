import React, { useState } from "react";

import {
  Container,
  Poster,
  TextSection,
  Title,
  Date,
  Overview,
} from "../styles/styles";
import Details from "../Details";

export interface Tv {
  id: number;
  name: string;
  first_air_date: string;
  poster_url: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface TvProps {
  tv: Tv;
}

const TvItem: React.FC<TvProps> = ({ tv }) => {
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
  if (tv.first_air_date) {
    const date = tv.first_air_date.split("-");
    dateText = `${Number(date[2])} de ${months[Number(date[1])]} de ${date[0]}`;
  }
  return (
    <>
      <Details
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        title={tv.name}
        sinopse={tv.overview}
        release_date={tv.first_air_date}
        vote_average={tv.vote_average}
        bigger_poster_url={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
      />
      <Container onClick={() => setModalIsOpen(true)}>
        <Poster poster_url={tv.poster_url}></Poster>
        <TextSection>
          <Title>{tv.name}</Title>
          <Date>{dateText}</Date>
          <Overview>
            <p>{tv.overview}</p>
          </Overview>
        </TextSection>
      </Container>
    </>
  );
};

export default TvItem;
