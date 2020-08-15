import React from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Container, GoButton, Page, ContainerPage } from "./styles";

interface PaginationProps {
  setCurrentPage(pageNumber: number): void;
  goBack(): void;
  goForward(): void;
  totalItems: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  goBack,
  goForward,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers: number[] = [];
  const pages = Math.ceil(totalItems / 20);
  let generatePages = false;
  if (pages !== 0) {
    generatePages = true;
  }

  function setPagination() {
    if (pages <= 4) {
      for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push(2);
      let initialPage = 3;
      if (currentPage > 6) {
        initialPage = currentPage - 2;
      }
      for (let i = initialPage; i < pages - 2 && i <= currentPage + 3; i++) {
        pageNumbers.push(i);
      }

      pageNumbers.push(pages - 2);
      pageNumbers.push(pages - 1);
    }
  }

  setPagination();

  function renderPagination() {
    let lastPage = 1;
    const pages = pageNumbers.map((page) => {
      lastPage++;
      if (lastPage - 1 === page) {
        return (
          <Page
            onClick={() => setCurrentPage(page)}
            key={page}
            isSelected={page === currentPage}
          >
            {page}
          </Page>
        );
      } else {
        lastPage = page + 1;
        return (
          <ContainerPage key={page}>
            <p>...</p>
            <Page
              onClick={() => setCurrentPage(page)}
              isSelected={page === currentPage}
            >
              {page}
            </Page>
          </ContainerPage>
        );
      }
    });

    return pages;
  }

  return (
    <Container>
      <ul>
        {generatePages ? (
          <div>
            <li>
              {currentPage !== 1 ? (
                <GoButton
                  disabled={currentPage === 1 ? true : false}
                  onClick={() => goBack()}
                  className={`btn-page ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <FiArrowLeft size={15} color="#000" />
                  Anterior
                </GoButton>
              ) : (
                ""
              )}
            </li>
            {renderPagination()}

            {/* <li className="page-number current">
              {pageNumbers[currentPage - 1]}
            </li>
            <li>|</li>
            <li className="page-number">
              {pageNumbers[pageNumbers.length - 1]}
            </li> */}
            <li>
              {currentPage !== pages ? (
                <GoButton
                  disabled={currentPage === pages ? true : false}
                  onClick={() => goForward()}
                  className={`btn-page ${
                    currentPage === pages ? "disabled" : ""
                  }`}
                >
                  Próxima
                  <FiArrowRight size={15} color="#000" />
                </GoButton>
              ) : (
                ""
              )}
            </li>
          </div>
        ) : (
          ""
        )}
      </ul>
    </Container>
  );
};

export default Pagination;
