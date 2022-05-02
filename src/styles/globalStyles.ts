import {createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  html {
    --color-text: #faf9f9;
    --color-accent: #3E63DD;
    --color-primary: #101D46;
    --color-selection: #05A2C2;
    --color-white-bg: #F8FAFF;
  }

  body {
    line-height: 1.5;
    overflow-x: hidden;
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
    padding: 0;
  }

  ::-moz-selection {
    background-color: var(--color-selection);
    color: #fff;
  }

  ::selection {
    background-color: var(--color-selection);
    color: #fff;
  }
`
