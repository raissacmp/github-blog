import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <GlobalStyle />
        <h1>Github Blog</h1>
      </div>
    </ThemeProvider>
  );
}
