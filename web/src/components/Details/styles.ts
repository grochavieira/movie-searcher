import styled from "styled-components";

interface PosterProps {
  poster_url: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const Title = styled.div`
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  span {
    color: #bbb;
    font-weight: 0;
  }
`;

export const Review = styled.div`
  display: flex;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 50%;
    padding: 13px 8px;
  }
`;

export const Sinopse = styled.div`
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-align: justify;
  color: #fff;

  span {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: px;
  }
`;

export const Poster = styled.div<PosterProps>`
  min-width: 300px;
  max-height: 500px;
  border-radius: 15px;
  margin: 0px 30px;
  background-color: #aaa;
  content: ${(props) => `url(${props.poster_url})`};
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

export const Line = styled.div`
  height: 100%;
  border-left: 10px solid #fff;
`;
