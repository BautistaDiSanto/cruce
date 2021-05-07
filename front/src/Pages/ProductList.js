import styled from "styled-components";
import { ProductList } from "../components/productList";
import { Footer } from "../components/footer";

export const ProductListPage = () => {
  return (
    <Container>
      <ProductList />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100%;
`;
