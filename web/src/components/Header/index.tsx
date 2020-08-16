import React from "react";

import { Container, Logo, StartSection, Tab, EndSection } from "./styles";
import { FaPlus, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <StartSection>
        <Logo
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
        <Tab>Filmes</Tab>
        <Tab>Séries</Tab>
        <Tab>Pessoas</Tab>
        <Tab>Mais</Tab>
      </StartSection>
      <EndSection>
        <Tab>
          <FaPlus size={20} color="#fff" />
        </Tab>
        <Tab>
          <span>PT</span>
        </Tab>
        <Tab>Entrar</Tab>
        <Tab>Junte-se ao TMDb</Tab>
        <Tab>
          <FaSearch size={25} color="rgb(3, 180, 228)" />
        </Tab>
      </EndSection>
    </Container>
  );
};

export default Header;
