export const retrieveToken = () => {
  return { authenticationToken: localStorage?.getItem("TOKEN") };
};
