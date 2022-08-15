import { ApolloClient, createHttpLink } from "@apollo/client";
import { cache } from "./graphql/cache";
//import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://fridaynight-server.herokuapp.com/graphql",
});

// const getToken = async () => {
//   try {
//     const value = await localStorage.getItem("@token");
//     if (value) {
//       return value;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const authLink = setContext(async (_, { headers }) => {
//   const token = await getToken();
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `JWT ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
//   link: authLink.concat(httpLink),
  link:httpLink,
  cache,
});

export default client;
