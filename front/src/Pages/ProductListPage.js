import styled from "styled-components";
import React from "react";
import { ProductList } from "../components/productList";
import { Pagination } from "../components/pagination";

export const ProductListPage = () => {
  //usar usecontext para manejar los estados
  let [actualPage, setActualPage] = React.useState(1);
  let [totalPages, setTotalPages] = React.useState("");

  return (
    <Container>
      <ProductList actualPage={actualPage} setTotalPages={setTotalPages} />
      <Pagination setActualPage={setActualPage} totalPages={totalPages} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  min-height: 100%;
`;
