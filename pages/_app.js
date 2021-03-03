import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  body {
    background-color: #030302;
  }
  .body-no-scroll {
    height: 100%;
    overflow: hidden;
  }
  .container {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .container {
      width: 85%;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
