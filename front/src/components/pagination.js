import React from "react";
import styled from "styled-components";

export const Pagination = ({ setActualPage, totalPages }) => {
  let [page, setPage] = React.useState(1);
  console.log(page);
  console.log(totalPages, "paginas");
  //hacer re-work con switch
  if (page === 1)
    return (
      <Wraper>
        <ButtonSpace />
        <ButtonSpace />
        <ButtonActive>{page}</ButtonActive>
        <Button
          onClick={() => {
            setPage(page + 1);
            setActualPage(page + 1);
          }}
        >
          {page + 1}
        </Button>
        <Button
          onClick={() => {
            setPage(page + 2);
            setActualPage(page + 2);
          }}
        >
          {page + 2}
        </Button>
        <Button
          onClick={() => {
            setPage(page + 1);
            setActualPage(page + 1);
          }}
        >
          {">"}
        </Button>
        <Button
          onClick={() => {
            setPage(totalPages);
            setActualPage(totalPages);
          }}
        >
          {">>"}
        </Button>
      </Wraper>
    );
  else if (page !== 1 && page !== totalPages)
    return (
      <Wraper>
        <Button
          onClick={() => {
            setPage(1);
            setActualPage(1);
          }}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => {
            setPage(page - 1);
            setActualPage(page - 1);
          }}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => {
            setPage(page - 1);
            setActualPage(page - 1);
          }}
        >
          {page - 1}
        </Button>
        <ButtonActive>{page}</ButtonActive>
        <Button
          onClick={() => {
            setPage(page + 1);
            setActualPage(page + 1);
          }}
        >
          {page + 1}
        </Button>
        <Button
          onClick={() => {
            setPage(page + 1);
            setActualPage(page + 1);
          }}
        >
          {">"}
        </Button>
        <Button
          onClick={() => {
            setPage(totalPages);
            setActualPage(totalPages);
          }}
        >
          {">>"}
        </Button>
      </Wraper>
    );
  else
    return (
      <Wraper>
        <Button
          onClick={() => {
            setPage(1);
            setActualPage(1);
          }}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => {
            setPage(page - 1);
            setActualPage(page - 1);
          }}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => {
            setPage(page - 2);
            setActualPage(page - 2);
          }}
        >
          {page - 2}
        </Button>
        <Button
          onClick={() => {
            setPage(page - 1);
            setActualPage(page - 1);
          }}
        >
          {page - 1}
        </Button>
        <ButtonActive>{totalPages}</ButtonActive>
        <ButtonSpace />
        <ButtonSpace />
      </Wraper>
    );
};

const Wraper = styled.div`
  width: 70%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 450px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const Button = styled.button`
  background-color: #f0f0f0;
  width: 1.5rem;
  height: 85%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    transform: scale(1.1);
  }
  @media (min-width: 1024px) {
  }
`;

const ButtonSpace = styled.button`
  background-color: inherit;
  width: 1.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonActive = styled.button`
  width: 2rem;
  height: 100%;
  background-color: #bfbfbf;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    transform: scale(1.1);
  }
  @media (min-width: 1024px) {
  }
`;
