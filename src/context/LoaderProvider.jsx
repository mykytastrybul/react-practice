import { createContext, useContext, useState } from "react";

const loaderStyles = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "50px",
};

const LoaderContext = createContext();

export const useLoaderContext = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={setIsLoading}>
      {isLoading && <h2 style={loaderStyles}>Loading</h2>}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
