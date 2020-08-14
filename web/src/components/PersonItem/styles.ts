import styled from "styled-components";

interface ProfileProps {
  profile_url: string;
}

export const Container = styled.div`
  display: flex;
  margin: 0px 0px 15px 50px;
  border-radius: 12px;
  height: 90px;
`;

export const Profile = styled.section<ProfileProps>`
  margin-right: 15px;
  border-radius: 12px;
  min-width: 90px;
  background-color: #aaa;
  content: ${(props) => `url(${props.profile_url})`};
  background-repeat: no-repeat;
`;

export const Title = styled.h2``;

export const Overview = styled.div`
  display: flex;
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.2rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
    margin-bottom: -15px;
  }

  p {
    font-size: 1rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
`;
