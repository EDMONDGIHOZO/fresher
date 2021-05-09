import { css } from '@emotion/react'

const famelist = css`
  margin: 0 auto;
  width: 90%;
  max-width: var(--page-width);
  position: relative;
  top: -3ch;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1.5ch 5ch;
  background-color: var(--page-background-accent);

  a:hover,
  a:focus {
    color: var(--color-accent);
  }
`
const para = css`
  max-width: 60ch;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5em;

  p {
    margin-top: 3ch;
  }
`

export { famelist, para }
