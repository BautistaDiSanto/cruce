import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductListPage } from "./Pages/ProductList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductListPage} />
          </Switch>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
