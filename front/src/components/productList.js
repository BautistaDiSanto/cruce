import styled from "styled-components";
import React from "react";
import { GetProducts } from "../API";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Spinner,
} from "@chakra-ui/react";

const OrderBy = ({ sortOptions, setLabel, label, setSort }) => {
  //hacer custom drop-down-menu
  return (
    <Menu matchWidth>
      <Button as={Button}>
        <p>{label}</p>
      </Button>
      <MenuList>
        {sortOptions.map((item) => {
          return (
            <MenuItem
              key={item.label}
              onClick={(e) => {
                setSort(item.value);
                setLabel(item.label);
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

const FilterMenu = () => {
  return (
    <Menu matchWidth>
      <Filter as={Button}>filters v</Filter>
      <MenuList>
        <MenuItem>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            <SliderThumb />
          </Slider>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const ProductList = ({ actualPage, setTotalPages }) => {
  const sortOptions = [
    { label: "Default", value: "" },
    { label: "Mayor", value: "DESC" },
    { label: "Menor", value: "ASC" },
  ];
  const [label, setLabel] = React.useState("Ordenar por");
  const [sort, setSort] = React.useState("");
  const { data, status } = GetProducts(sort, actualPage);
  console.log(sort);
  console.log({ data, status });
  if (status === "loading")
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner size="xl" color="red" />
      </div>
    );
  if (status === "error")
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "900" }}>error</p>
      </div>
    );
  setTotalPages(data.pages);
  return (
    <>
      <Header>
        <Filters>
          <Path>
            <Link>inicio</Link>
            <Spacer>/</Spacer>
            <Link>juguetes</Link>
            <Spacer>/</Spacer>
            <p style={{ fontWeight: "bolder", color: "black" }}>funko pop</p>
          </Path>
          <FilterMenu />
          <OrderBy
            sortOptions={sortOptions}
            setLabel={setLabel}
            label={label}
            setSort={setSort}
          />
        </Filters>
        <Banner src="../../../banner.svg" />
      </Header>
      <ProductListWrap>
        <List>
          {data.rows.map((product) => {
            return (
              <ProductCard key={product.id}>
                <ProductImg src="../toy.svg" />
                <ProductInfo>
                  <Section>Funko</Section>
                  <Title>{product.name}</Title>
                  <Installments>6 cuotas s/interés</Installments>
                  <Fraction>${(product.price / 6).toFixed(2)}</Fraction>
                  <Final>
                    <p>Final:&nbsp;</p>
                    <Price>${product.price}</Price>
                  </Final>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </List>
      </ProductListWrap>
    </>
  );
};

const ProductListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
`;

const Header = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const Filters = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    width: 85%;
    flex-direction: row;
  }
`;

const Path = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const Filter = styled(MenuButton)`
  width: 90%;
  border: none;
  color: black;
  :hover {
    font-weight: bolder;
    border: none;
  }
  @media (min-width: 1024px) {
    width: 20%;
    border: none;
  }
`;

const Link = styled.p`
  user-select: none;
  color: grey;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: black;
  }
  :active {
    background-color: none;
    font-weight: bold;
    color: #f26522;
  }
`;

const Spacer = styled.p`
  user-select: none;
  color: grey;
`;

const Button = styled(MenuButton)`
  width: 90%;
  border: 1px solid #f0f0f0;
  color: #505050;
  border-radius: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
  :hover {
    border: 1px solid orange;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: fit-content;
  @media (min-width: 1024px) {
    width: 80%;
    height: fit-content;
    margin-top: -3.2rem;
  }
`;

const List = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: initial;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const ProductCard = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12rem;
  padding: 0.5rem 0 0.5rem 0;
  border-top: 1px solid #f0f0f0;
  @media (min-width: 1024px) {
    border: 0px;
    width: 27%;
    height: 30rem;
    flex-direction: column;
    height: fit-content;
  }
`;

const ProductImg = styled.img`
  height: 100%;
  width: auto;
  @media (min-width: 1024px) {
    width: 85%;
    height: auto;
  }
`;

const ProductInfo = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: space-evenly;
  }
`;

const Section = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  color: #7d5a94;
`;

const Title = styled.p`
  font-weight: 600;
  @media (min-width: 1024px) {
    font-weight: normal;
  }
`;

const Installments = styled.p`
  color: #505050;
  font-weight: 500;
`;

const Fraction = styled.p`
  margin-top: -0.7rem;
  font-size: 1.2rem;
  font-weight: 900;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const Final = styled.div`
  display: flex;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: red;
`;
