import { useSelector } from "react-redux";

const loaderStyles = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "50px",
};

const LoaderWrapper = ({ children }) => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      {isLoading && <h2 style={loaderStyles}>Loading</h2>}
      {children}
    </>
  );
};

export default LoaderWrapper;
