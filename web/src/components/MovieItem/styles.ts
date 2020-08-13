import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0px 0px 25px 50px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const ImageSection = styled.section`
  margin-right: 15px;
  img {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  height: 100%;
`;

export const TextSection = styled.section``;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  margin-bottom: -12px;
`;

export const Data = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  color: rgb(153, 153, 153);
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;
