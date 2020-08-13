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

interface SearchItem {
  type: string;
  label: string;
  isSelected: boolean;
  value: number;
}

function SearchMovies() {
  const [searchResults, setSearchResults] = useState([
    { type: "multi", label: "Tudo", isSelected: false, value: 0 },
    { type: "movie", label: "Filmes", isSelected: true, value: 0 },
    { type: "tv", label: "Séries", isSelected: false, value: 0 },
    { type: "person", label: "Pessoas", isSelected: false, value: 0 },
  ]);

  const [searchType, setSearchType] = useState("movie");

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function searchItem() {
      const apiKey = "e2e6c0526e3737f2381684d2fd63d354";
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${searchType}?query=${search}&language=pt-BR&api_key=${apiKey}`
        );

        const { results } = data;

        const moviesArray: Movie[] = [];
        results.map((movie: Movie) => {
          movie.poster_url = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
          moviesArray.push(movie);
        });

        setMovies(moviesArray);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    setMovies([]);
    searchItem();
  }, [search, searchType]);

  function handleSearchType(searchItem: SearchItem) {
    const newSearchType = searchItem.type;
    const newSearchResults = searchResults.map((item) => {
      if (searchItem.type === item.type) {
        item.isSelected = true;
      } else item.isSelected = false;

      return item;
    });

    setSearchResults(newSearchResults);
    setSearchType(newSearchType);
  }

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
                <SearchItem
                  onClick={() => handleSearchType(searchItem)}
                  isSelected={searchItem.isSelected}
                  key={searchItem.type}
                >
                  <p>{searchItem.label}</p> <span>{searchItem.value}</span>
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
