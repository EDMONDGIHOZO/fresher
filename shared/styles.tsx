import { css } from '@emotion/react'

const container = css`
  min-height: 100%;
  padding: 0 0.5rem;
  display: grid;
  place-items: center;
`

const main = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

export { container, main, title }
