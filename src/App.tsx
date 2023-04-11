import { ThemeProvider } from "styled-components";
import { PostDetails } from "./pages/Posts";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <GlobalStyle />
        <PostDetails />
      </div>
    </ThemeProvider>
  );
}
