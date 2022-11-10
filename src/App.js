import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './layout/reset';
import { theme } from './layout/theme';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
