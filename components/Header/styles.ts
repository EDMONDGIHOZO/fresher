import { css } from '@emotion/react'

const SR_ONLY = `
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const container = css`
  min-height: 40vh;
  display: grid;
  place-items: center;
  background-color: var(--background-accent);
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
  ${SR_ONLY}
`

export { container, main, title }
