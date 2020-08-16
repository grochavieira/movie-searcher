import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-top: 40px;
  padding-bottom: 100px;
  align-items: flex-end;
  background-color: #032541;
  white-space: nowrap;
`;

export const StartSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  align-items: flex-end;
`;

export const Logo = styled.img`
  width: 130px;
  margin-bottom: 40px;
`;

export const JoinButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  color: rgb(3, 180, 228);
  padding: 13px;
  cursor: pointer;
`;

export const EndSection = styled.section`
  display: flex;
  margin-left: 40px;
  margin-right: 120px;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-weight: 600;
  color: #fff;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const Info = styled.div`
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  color: #fff;
  margin-top: 6px;
  cursor: pointer;
`;
