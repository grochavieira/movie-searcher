import styled, { StyledFunction } from "styled-components";

interface SearchItemProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBlock = styled.div`
  width: 100%;
  margin: 10px 0px 30px 0px;
  border: 0;
  border-top: solid 2px rgb(48, 64, 81);
  border-bottom: solid 2px #eee;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 0;
    width: 90%;
    margin-left: 5px;
    font-size: 1rem;
    font-family: Arial, sans-serif;
    color: rgb(172, 172, 172);
  }

  input:focus {
    outline: none;
  }

  *::placeholder {
    color: rgb(172, 172, 172);
  }
`;

export const Main = styled.main`
  display: flex;
  width: 90%;
  align-items: flex-start;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  min-width: 270px;
`;

export const SearchResult = styled.section`
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #01b4e4;
  margin-bottom: 8px;

  p {
    margin-left: 20px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 3px 0px;
  }
`;

export const SearchItem = styled.div<SearchItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  font-size: 1rem;
  background: ${(props) => (props.isSelected ? "rgb(235, 235, 235)" : "#fff")};

  p {
    color: rgb(54, 54, 54);
    font-weight: ${(props) => (props.isSelected ? "bold" : "none")};
  }

  span {
    color: rgb(148, 148, 148);
    background-color: ${(props) =>
      props.isSelected ? "#fff" : "rgb(234, 234, 234)"};
    padding: 5px 15px;
    border-radius: 10px;
    font-family: "Roboto Mono", monospace;
    font-size: 1rem;
  }
`;

export const Information = styled.div`
  margin-top: 10px;
  font-size: 1rem;

  p {
    color: rgb(102, 102, 102);
  }
  span {
    margin-right: 5px;
  }
`;

export const MoviesList = styled.section`
  width: 100%;
`;
