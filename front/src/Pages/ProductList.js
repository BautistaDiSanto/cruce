import styled from "styled-components";
import { ProductList } from "../components/productList";

export const ProductListPage = () => {
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100%;
  width: 100%;
`;
