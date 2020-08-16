import React, { useState } from "react";

import { Container, Profile, TextSection, Title, Overview } from "./styles";
import Details from "../Details";

interface KnownFor {
  title: string;
  original_name: string;
}

export interface Person {
  id: number;
  known_for: Array<KnownFor>;
  name: string;
  known_for_department: string;
  profile_path: string;
  profile_url: string;
  movies_worked_on: string;
  popularity: number;
}

interface PersonItemProps {
  person: Person;
}

const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Details
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        title={person.name}
        department={person.known_for_department}
        sinopse={`Trabalhou no(s) filme(s): ${person.movies_worked_on}`}
        bigger_poster_url={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
      />
      <Container onClick={() => setModalIsOpen(true)}>
        <Profile profile_url={person.profile_url}></Profile>

        <TextSection>
          <h2>{person.name}</h2>

          <p>
            {person.known_for_department} • {person.movies_worked_on}
          </p>
        </TextSection>
      </Container>
    </>
  );
};

export default PersonItem;
