import React from "react";

import { Container, Profile, TextSection, Title, Overview } from "./styles";

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
}

interface PersonItemProps {
  person: Person;
}

const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  return (
    <Container>
      <Profile profile_url={person.profile_url}></Profile>

      <TextSection>
        <h2>{person.name}</h2>

        <p>
          {person.known_for_department} • {person.movies_worked_on}
        </p>
      </TextSection>
    </Container>
  );
};

export default PersonItem;
