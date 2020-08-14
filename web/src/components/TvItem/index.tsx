import React from "react";

import {
  Container,
  Poster,
  TextSection,
  Title,
  Data,
  Overview,
} from "../styles/styles";

export interface Tv {
  id: number;
  name: string;
  first_air_date: string;
  poster_url: string;
  poster_path: string;
  overview: string;
}

interface TvProps {
  tv: Tv;
}

const TvItem: React.FC<TvProps> = ({ tv }) => {
  return (
    <Container>
      <Poster poster_url={tv.poster_url}></Poster>
      <TextSection>
        <Title>{tv.name}</Title>
        <Data>{tv.first_air_date}</Data>
        <Overview>
          <p>{tv.overview}</p>
        </Overview>
      </TextSection>
    </Container>
  );
};

export default TvItem;
