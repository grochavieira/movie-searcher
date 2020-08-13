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
  width: 90%;
  margin: 10px 0px 30px 0px;
  border: 0;
  border-top: solid 2px rgb(48, 64, 81);
  border-bottom: solid 2px #eee;
  height: 40px;
  display: flex;
  align-items: center;

  input {
    border: 0;
    width: 100%;
    margin-left: 5px;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 90%;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
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
  background: rgb(65, 180, 225);
  margin-bottom: 8px;

  p {
    margin-left: 20px;
    color: #fff;
    font-size: 18px;
    padding: 3px 0px;
  }
`;

export const SearchItem = styled.div<SearchItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  font-size: 16px;
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
  }
`;

export const Information = styled.div`
  margin-top: 10px;

  p {
    color: rgb(152, 152, 152);
  }
  span {
    margin-right: 5px;
  }
`;

export const MoviesList = styled.section`
  width: 100%;
`;
