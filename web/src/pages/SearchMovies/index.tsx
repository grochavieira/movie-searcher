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
import TvItem, { Tv } from "../../components/TvItem";
import PersonItem, { Person } from "../../components/PersonItem";

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
  const [totalResults, setTotalResults] = useState<any>({
    multi: 0,
    movie: 0,
    tv: 0,
    person: 0,
  });

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvs, setTvs] = useState<Tv[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);

  const apiKey = "e2e6c0526e3737f2381684d2fd63d354";

  useEffect(() => {
    async function searchItem() {
      if (searchType === "movie" || searchType === "multi") {
        await searchMovieItems();
      }
      if (searchType === "tv" || searchType === "multi") {
        await searchTvItems();
      }
      if (searchType === "person" || searchType === "multi") {
        await searchPersonItems();
      }
      const onlyTotalResults = true;

      let totalMovies = (await searchMovieItems(onlyTotalResults)) || 0;
      let totalTvs = (await searchTvItems(onlyTotalResults)) || 0;
      let totalPersons = (await searchPersonItems(onlyTotalResults)) || 0;

      console.log("Total movies: ", totalMovies);

      setTotalResults({
        multi: totalMovies + totalTvs + totalPersons,
        movie: totalMovies,
        tv: totalTvs,
        person: totalPersons,
      });
    }
    setMovies([]);
    setTvs([]);
    setPersons([]);
    searchItem();
  }, [search, searchType]);

  async function searchMovieItems(onlyTotalResults = false) {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&api_key=${apiKey}`
      );

      if (onlyTotalResults) {
        return data.total_results;
      }

      const { results } = data;

      const moviesArray: Movie[] = [];

      results.map((movie: Movie) => {
        movie.poster_url = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
        moviesArray.push(movie);
      });
      setMovies(moviesArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchTvItems(onlyTotalResults = false) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/tv?query=${search}&language=pt-BR&api_key=${apiKey}`
      );

      if (onlyTotalResults) {
        return data.total_results;
      }

      const { results } = data;

      const tvsArray: Tv[] = [];

      results.map((tv: Tv) => {
        tv.poster_url = `https://image.tmdb.org/t/p/w92${tv.poster_path}`;
        tvsArray.push(tv);
      });
      setTvs(tvsArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchPersonItems(onlyTotalResults = false) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/person?query=${search}&language=pt-BR&api_key=${apiKey}`
      );

      if (onlyTotalResults) {
        return data.total_results;
      }

      const { results } = data;

      const personsArray: Person[] = [];

      results.map((person: Person) => {
        const movies_worked_on = person.known_for.map((data) => {
          if (data.title) {
            return data.title;
          } else {
            return data.original_name;
          }
        });
        person.movies_worked_on = movies_worked_on.join(", ");
        person.profile_url = `https://image.tmdb.org/t/p/w90_and_h90_face${person.profile_path}`;

        personsArray.push(person);
      });
      setPersons(personsArray);
    } catch (error) {
      console.log(error);
    }
  }

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
                  <p>{searchItem.label}</p>{" "}
                  <span>{totalResults[`${searchItem.type}`]}</span>
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
          {tvs.map((tv: Tv) => {
            return <TvItem key={tv.id} tv={tv} />;
          })}
          {persons.map((person: Person) => {
            return <PersonItem key={person.id} person={person} />;
          })}
        </MoviesList>
      </Main>
    </Container>
  );
}

export default SearchMovies;
