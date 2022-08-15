import React from "react";
import Navigator from "./pages/routing/Navigator";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
        <Navigator />
    </div>
    </ApolloProvider>
  );
}

export default App;
