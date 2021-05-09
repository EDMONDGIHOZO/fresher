import { css } from '@emotion/react'
import Page from '@layouts/page'
import Image from 'next/image'
import { FaStar as Star } from 'react-icons/fa'
import { para } from '@shared/style-helpers'

const header = css`
  padding: 0 2ch;
  text-align: center;
`

const pic = css`
  border-radius: 8px;
`

const name = css`
  font-size: 14px;
`

const footer = css`
  margin-top: 5ch;
  margin-righ: 5ch;
  text-align: right;
`

const About = () => (
  <Page
    meta={{
      title: 'about',
      description: 'this is showing the astronaut bio',
    }}
  >
    <section css={header}>
      <Image src="/mae.jpg" width={700} height={900} css={pic} />
      <h2 css={name}>
        Mae C. Jemison <Star />
      </h2>
    </section>
    <section css={para}>
      <p>
        Mae C. Jemison is an American astronaut and physician who, on June 4,
        1987, became the first African American woman to be admitted into NASA’s
        astronaut training program. On September 12, 1992, Jemison finally flew
        into space with six other astronauts aboard the Endeavour on mission
        STS47, becoming the first African American woman in space. In
        recognition of her accomplishments, Jemison has received several awards
        and honorary doctorates. Early Life and Education Jemison was born on
        October 17, 1956, in Decatur, Alabama. She is the youngest child of
        Charlie Jemison, a roofer and carpenter, and Dorothy (Green) Jemison, an
        elementary school teacher. Her sister, Ada Jemison Bullock, became a
        child psychiatrist, and her brother, Charles Jemison, is a real estate
        broker. The Jemison family moved to Chicago, Illinois, when Jemison was
        three years old to take advantage of better educational opportunities,
        and it is that city that she calls her hometown.
      </p>
    </section>
  </Page>
)

export default About
