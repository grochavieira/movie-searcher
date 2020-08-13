import React, { useState, useEffect } from "react";
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
import axios from "axios";

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

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function searchItem() {
      const apiKey = "e2e6c0526e3737f2381684d2fd63d354";
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&api_key=${apiKey}`
      );

      const { results } = data;

      const moviesArray: Movie[] = [];
      results.map((movie: Movie) => {
        movie.poster_url = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
        moviesArray.push(movie);
      });

      setMovies(moviesArray);

      console.log(data);
    }
    setMovies([]);
    searchItem();
  }, [search]);

  return (
    <Container>
      <InputBlock>
        <IoMdSearch size={19} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar por um Filme, Série ou Pessoa"
        />
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
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </MoviesList>
      </Main>
    </Container>
  );
}

export default SearchMovies;
