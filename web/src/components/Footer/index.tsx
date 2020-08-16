import React from "react";

import {
  Container,
  JoinButton,
  Logo,
  StartSection,
  EndSection,
  InfoList,
  Title,
  Info,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <StartSection>
        <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        <JoinButton>JUNTE-SE A COMUNIDADE</JoinButton>
      </StartSection>
      <EndSection>
        <InfoList>
          <Title>O BÁSICO</Title>
          <Info>Sobre o TMDb</Info>
          <Info>Contate-nos</Info>
          <Info>Suporte</Info>
          <Info>API</Info>
          <Info>Status do Sistema</Info>
        </InfoList>

        <InfoList>
          <Title>ENVOLVA-SE</Title>
          <Info>Bíblia do Colaborador</Info>
          <Info>Aplicativos de terceiros</Info>
          <Info>Adicionar um novo Filme</Info>
          <Info>Adicionar uma nova Série</Info>
        </InfoList>

        <InfoList>
          <Title>COMUNIDADE</Title>
          <Info>Diretrizes</Info>
          <Info>Discussões</Info>
          <Info>Placar de colaboradores</Info>
          <Info>Twitter</Info>
        </InfoList>

        <InfoList>
          <Title>LEGALIDADE</Title>
          <Info>Termos de uso</Info>
          <Info>Termos de Uso da API</Info>
          <Info>Política de privacidade</Info>
        </InfoList>
      </EndSection>
    </Container>
  );
};

export default Footer;
