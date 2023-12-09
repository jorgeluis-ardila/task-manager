import { css } from '@emotion/react';

const GlobalStyles = ({ theme }) => css`
  * {
    font-family: ${theme.typography.family.hauora.regular};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scrollbar-color: ${theme.colors.neutral[30]} ${theme.colors.neutral[10]};
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 6px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.colors.neutral[10]};
      border-radius: 8px;
      border: none;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.neutral[30]};
      border-radius: 8px;
    }
  }
  ${ResetsStyles}
  html,
  body {
    height: 100%;
    background: ${theme.colors.neutral.light};
  }
  #root {
    min-height: 100vmin;
    max-height: 100vmax;
    height: 100%;
  }
`;

const ResetsStyles = css`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  a,
  button {
    cursor: revert;
  }

  ol,
  ul,
  menu,
  summary {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input,
  textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  :where(pre) {
    all: revert;
    box-sizing: border-box;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable='false'])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable='true']) {
    -webkit-user-drag: element;
  }

  :where(dialog:modal) {
    all: revert;
    box-sizing: border-box;
  }

  ::-webkit-details-marker {
    display: none;
  }
`;

export default GlobalStyles;
