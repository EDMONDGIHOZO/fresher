import { css } from '@emotion/react'
import { IoMdPlanet as Saturn } from 'react-icons/io'

const saturnStyles = css`
  position: relative;
  top: 0.2em;
`

const logoStyles = css`
  color: var(--color-text-invert);
  font-size: 2rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`

const Logo = () => (
  <span css={logoStyles}>
    Fresh
    <Saturn css={saturnStyles} />
    astro
  </span>
)

export default Logo
