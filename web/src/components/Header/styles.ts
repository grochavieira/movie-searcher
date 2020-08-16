import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #032541;
`;

export const Logo = styled.img`
  width: 180px;
  height: 70px;

  margin-right: 10px;
  cursor: pointer;
`;

export const StartSection = styled.section`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const Tab = styled.div`
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-weight: 600;
  color: #fff;
  margin: 0px 14px;
  cursor: pointer;

  span {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 6px;
    transition: 0.2s;
  }

  span:hover {
    background-color: #fff;
    color: #032541;
  }
`;

export const EndSection = styled.section`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;
