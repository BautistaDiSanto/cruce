import styled from "styled-components";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { products } from "./products";
let newArray = products;
const Top = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [max, setMax] = React.useState("Ordenar por precio");
  const sortData = (newArray) => {
    return newArray.sort((a, b) => b.cases - a.cases);
  };
  return (
    <Flex direction="column" align="center" justify="center" width="100%">
      <Menu closeOnSelect={false} matchWidth>
        <MenuButton
          w="85%"
          borderRadius="md"
          borderWidth="0.15rem"
          mb="0.5rem"
          _active={{
            border: "0.15rem solid #f26522",
            color: "#f26522",
          }}
        >
          Filtrar
        </MenuButton>
        <MenuList w="100%">
          <MenuItem display="flex" direction="column">
            <Slider
              w="85%"
              aria-label="slider-ex-1"
              defaultValue={30}
              onChangeEnd={(val) => setValue1(val)}
            >
              <SliderTrack>
                <SliderFilledTrack bgColor="#f26522" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text ml="1rem">{value1}</Text>
          </MenuItem>
          <MenuItem display="flex" direction="column">
            <Slider
              w="85%"
              aria-label="slider-ex-1"
              defaultValue={30}
              onChangeEnd={(val) => setValue2(val)}
            >
              <SliderTrack>
                <SliderFilledTrack bgColor="#f26522" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text ml="1rem">{value2}</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false} matchWidth>
        <MenuButton
          w="85%"
          borderRadius="md"
          borderWidth="0.15rem"
          mb="0.5rem"
          _active={{
            border: "0.15rem solid #f26522",
            color: "#f26522",
          }}
        >
          {max}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={(e) => {
              setMax("Ordenar por precio");
            }}
          >
            Default
          </MenuItem>
          <MenuItem
            onClick={() => {
              setMax("Mayor precio");
            }}
          >
            Mayor precio
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setMax("Menor precio");
            }}
          >
            Menor precio
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export const ProductList = () => {
  return (
    <Flex direction="column" align="center">
      <Flex w="85%" justify="space-around" align="center" h="3rem">
        <Link>inicio</Link>
        <Link>/</Link>
        <Link>juguetes</Link>
        <Link>/</Link>
        <p style={{ fontWeight: "bolder", color: "black" }}>funko pop</p>
      </Flex>
      <Top />
      <Banner src="../../../banner.svg" />
      <Flex direction="column" h="fit-content" align="center">
        {newArray.map((p, index) => (
          <Flex
            w="95%"
            h="11.5rem"
            justify="space-around"
            borderTop="1px solid #e8e8e8"
          >
            <Image src={p.image} />
            <ProductInfo>
              <p style={{ color: "#7d5a94", fontWeight: "bolder" }}>Funko</p>
              <p>{p.name}</p>
              <p style={{ color: "grey" }}>6 cuotas s/interés</p>
              <p style={{ fontWeight: "bolder" }}>${p.price}</p>
              <p style={{ display: "flex", fontWeight: "900" }}>
                Final:&nbsp;
                <p style={{ color: "red", fontWeight: "bolder" }}>${p.price}</p>
              </p>
            </ProductInfo>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Path = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 3rem;
`;

const Link = styled.p`
  color: grey;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: black;
  }
  :active {
    font-weight: bold;
    color: #f26522;
  }
`;
const Filters = styled.button`
  cursor: pointer;
  width: 85%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
  border: 0.16rem solid #8c8c8c;
  border-radius: 0.3rem;
  background-color: white;
  margin-bottom: 0.5rem;
  :active {
    font-weight: bold;
    border: 0.16rem solid #f26522;
    color: #f26522;
  }
  outline: none;
`;

const Banner = styled.img`
  width: 100%;
  height: fit-content;
  padding-bottom: 1rem;
`;

const Cards = styled.div`
  height: fit-content;
  width: 90%;
  border-bottom: 1px solid #e8e8e8;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e8e8e8;
  background-color: white;
  height: 10.5rem;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
