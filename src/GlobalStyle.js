import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

  html { 
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-weight: normal;
    font-kerning: normal;
    word-wrap: break-word;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }

  button, input {
    overflow: visible;
  }
  button, select {
    text-transform: none;
  }
  [type='reset'], [type='submit'], button, html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, 
  [type='submit']::-moz-focus-inner, button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring, [type='reset']:-moz-focusring, 
  [type='submit']:-moz-focusring, button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }
  [type='checkbox'], [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

`
