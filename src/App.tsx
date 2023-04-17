import { ThemeProvider } from "styled-components";
import { Post } from "./pages/Post";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <GlobalStyle />
        <Post />
      </div>
    </ThemeProvider>
  );
}
