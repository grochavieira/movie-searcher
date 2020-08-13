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

import MovieItem, { Movie } from "../../components/MovieItem";

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

  const movies = [
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
    {
      title: "Os Vingadores: The Avengers",
      release_date: "25 de abril de 2012",
      description:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz ",
      image:
        "https://image.tmdb.org/t/p/w94_and_h141_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    },
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
        <MoviesList>
          {movies.map((movie: Movie) => {
            return <MovieItem key={movie.title} movie={movie} />;
          })}
        </MoviesList>
      </Main>
    </Container>
  );
}

export default SearchMovies;
