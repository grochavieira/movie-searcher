import React from "react";
import {
  Container,
  InputBlock,
  Main,
  SearchResult,
  MoviesList,
  Title,
  SearchItem,
  Information,
  SearchSection,
} from "./styles";
import { IoMdSearch } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";

function SearchMovies() {
  const searchResults = [
    "Filmes",
    "Séries",
    "Pessoas",
    "Coletâneas",
    "Palavras-chave",
    "Produtoras",
    "Emissoras",
  ];

  return (
    <Container>
      <InputBlock>
        <IoMdSearch size={19} />
        <input type="text" placeholder="Buscar por um Filme, Série ou Pessoa" />
      </InputBlock>

      <Main>
        <SearchSection>
          <SearchResult>
            <Title>
              <p>Resultado da Busca</p>
            </Title>
            {searchResults.map((searchItem) => {
              return (
                <SearchItem isSelected={false} key={searchItem}>
                  <p>{searchItem}</p> <span>0</span>
                </SearchItem>
              );
            })}
          </SearchResult>
          <Information>
            <p>
              <span>
                <BsInfoCircleFill size={15} color="#000" />
              </span>
              Dica: Você pode usar o filtro 'y:' <br /> para limitar seus
              resultados por ano. <br /> Exemplo 'tropa de elite y:2007'
            </p>
          </Information>
        </SearchSection>
        <MoviesList></MoviesList>
      </Main>
    </Container>
  );
}

export default SearchMovies;
