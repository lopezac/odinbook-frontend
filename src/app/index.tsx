import { Routing } from "pages";
import { GlobalStyles } from "./styles";
import { withProviders } from "./providers";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routing />
    </>
  );
};

export default withProviders(App);
