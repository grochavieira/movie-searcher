import styled from "styled-components";

interface PageProps {
  isSelected: boolean;
}

export const Container = styled.div`
  ul {
    font-size: 1rem;
    font-weight: 600;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    align-items: center;
    justify-content: center;
  }

  ul div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 2px;
  }
`;

export const GoButton = styled.button`
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: 0;
  background: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 0px 5px;
`;

export const Page = styled.li<PageProps>`
  font-family: "Source Sans Pro", Arial, sans-serif;
  padding: 0px 5px;
  margin: 0px 5px;
  font-size: 0.9rem;
  cursor: pointer;

  border: ${(props) => (props.isSelected ? "1px solid #000" : "0")};
  padding: ${(props) => (props.isSelected ? "5px 10px" : "0px")};
  font-weight: ${(props) => (props.isSelected ? "400" : "600")};
`;

export const ContainerPage = styled.div`
  margin: 0px -10px;
  p {
    margin: 0px;
  }
`;
