import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  Main,
  Title,
  Poster,
  Sinopse,
  Review,
  CloseButton,
  Line,
} from "./styles";
import Modal from "react-modal";

interface DetailsProps {
  isOpen: boolean;
  setModalIsOpen(isOpen: boolean): void;
  title: string;
  release_date?: string;
  sinopse: string;
  bigger_poster_url: string;
  vote_average?: number;
  department?: string;
}

Modal.setAppElement("#root");

const Details: React.FC<DetailsProps> = ({
  isOpen,
  setModalIsOpen,
  sinopse,
  release_date,
  title,
  bigger_poster_url,
  vote_average,
  department,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        content: {
          padding: 0,
          backgroundColor: "transparent",
        },
      }}
    >
      <Container>
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <FiArrowLeft size={40} />
        </CloseButton>
        <Line />
        <Poster poster_url={bigger_poster_url} />
        <Main>
          <Title>
            {title}
            <span>{` ${
              release_date ? `(${release_date.split("-")[0]})` : ""
            }`}</span>
          </Title>
          {vote_average ? (
            <Review>
              <span>{vote_average * 10}%</span>
              <p>
                Avaliação <br />
                dos usuários
              </p>
            </Review>
          ) : (
            ""
          )}{" "}
          {department ? (
            <Sinopse>
              <span>{department}</span>
              <br />
              {sinopse}
            </Sinopse>
          ) : (
            <Sinopse>
              <span>Sinopse</span> <br /> {sinopse}
            </Sinopse>
          )}
        </Main>
      </Container>
    </Modal>
  );
};

export default Details;
