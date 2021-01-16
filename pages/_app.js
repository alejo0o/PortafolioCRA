import { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeaderAnimation from '../components/HeaderAnimation/Animation';
//Css imports
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
    background:  #e6eaeb;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderAnimation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
