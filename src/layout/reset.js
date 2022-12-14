import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Black.otf') format('otf');
    font-weight: 800;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Bold.otf') format('otf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Medium.otf') format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Regular.otf') format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-DemiLight.otf') format('otf');
    font-weight: 350;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Light.otf') format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Thin.otf') format('otf');
    font-weight: 200;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR';
    letter-spacing: -1px;
    font-weight: 300;
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
    box-sizing: border-box;
  }
  *:focus { 
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
  }
  body {
    overflow: auto;
    user-select: none;
    /* overscroll-behavior: none; */
    -webkit-overflow-scrolling: none;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button:focus {
    outline: none !important;
  }
  /* svg * {
    transition: 0.08s;
  } */
  input {
    border: none;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :disabled {
      background-color: #f2f2f2;
      color: #777;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;