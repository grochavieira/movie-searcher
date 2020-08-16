import styled from "styled-components";

interface PosterProps {
  poster_url: string;
}

export const Container = styled.div`
  display: flex;
  margin: 0px 0px 25px 50px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  height: 141px;
  cursor: pointer;
`;

export const Poster = styled.section<PosterProps>`
  margin-right: 15px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 92px;
  background-color: #aaa;
  content: ${(props) => `url(${props.poster_url})`};
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  margin-bottom: -12px;
`;

export const Date = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  color: rgb(153, 153, 153);
  margin-bottom: 10px;
`;

export const Overview = styled.div`
  display: -webkit-box;
  max-width: 95%;
  height: 109.2px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.625;

  p {
    font-size: 1rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
`;
