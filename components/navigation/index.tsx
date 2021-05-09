import Link from 'next/link'
import { GiAstronautHelmet as Astro } from 'react-icons/gi'
import { famelist } from '@shared/style-helpers'

const Navigation = () => (
  <nav css={famelist}>
    <Link href="/">
      <a aria-label="homepage">
        <Astro />
      </a>
    </Link>
    <Link href="/about">
      <a aria-label="homepage">Bio</a>
    </Link>
  </nav>
)

export default Navigation
