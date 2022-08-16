import React from "react";
import Navigator from "./pages/routing/Navigator";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import { ThemeProvider, createTheme } from "@mui/material";
function App() {
    const themes = createTheme({
      palette: {
          type: 'light',
          primary: {
              main: "#930dd1",
              light: "#fafafa",
              dark: "#000",
          },
      },
  });
  return (
    <>
    <div className="App">
      <ApolloProvider client={client}>
        <ThemeProvider theme={themes}>
          <Navigator />
        </ThemeProvider>
      </ApolloProvider>
    </div>
    </>
  );
}

export default App;