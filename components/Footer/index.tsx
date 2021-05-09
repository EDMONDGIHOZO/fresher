import { IoLogoGithub as Git } from 'react-icons/io'
import { IoLogoLinkedin as Linkedin } from 'react-icons/io'
import { FiTwitter as Twit } from 'react-icons/fi'
import { metadata } from 'config'
import { footer } from './style'
import { famelist } from '@shared/style-helpers'

const Footer = () => (
  <footer css={footer}>
    <ul css={famelist}>
      <li>
        <a href={metadata.author.github} target="_blank" rel="noopener">
          <Git />
        </a>
      </li>
      <li>
        <a href={metadata.author.linkedin} target="_blank" rel="noopener">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href={metadata.author.twitter} target="_blank" rel="noopener">
          <Twit />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
