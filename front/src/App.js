import { ChakraProvider } from "@chakra-ui/react";
import { ProductList } from "./components/productList";

function App() {
  return (
    <ChakraProvider>
      <ProductList />
    </ChakraProvider>
  );
}

export default App;
