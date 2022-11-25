import { GlobalStyles } from "./styles";
import { withProviders } from "./providers";
import { Routing } from "pages";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routing></Routing>
    </>
  );
};

export default withProviders(App);
