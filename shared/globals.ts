import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-width: 800px;
    --page-background: rgb(240, 240, 240);
    --page-background-accent: rgb(180, 210, 210);
    --page-text: rgb(40, 40, 44);
    --background-accent: rgb(3, 84, 133);
    --color-text-invert: rgb(240, 240, 240);
    --color-accent: rgb(4, 64, 100);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: var(--page-background);
    color: var(--page-text);
    font-family: -apple-system, BlinkMacSystemFont, segoe UI, Roboto, Oxygen,
      ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
