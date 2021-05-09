import Page from '@layouts/page'
import { para } from '@shared/style-helpers'
export default function Home() {
  return (
    <Page meta={{ title: 'fresher', description: 'astro' }}>
      <section css={para}>
        <h1>Astronomy news </h1>
        <p>
          Friday, May 7 Canes Venatici the Hunting Dogs is a northern
          constellation drawn from just two bright stars: magnitude 3 Alpha (α)
          and magnitude 4 Beta (β) Canum Venaticorum. They sit below the curve
          of the Big Dipper’s handle, parallel to Alkaid and Mizar but about 15°
          southwest of that pair. The constellation is home to several
          relatively bright galaxies, including magnitude 8.4 M106. Measuring
          20.0' by 8.4', many consider it one of the best galaxies in Messier’s
          list, but it’s also one of the least observed. You’ll find this spiral
          in the constellation’s northwest corner, about 6.5° northwest of Beta
          Canum Venaticorum and 7.5° southeast of magnitude 2.4 Phecda (Gamma
          [γ] Ursae Majoris). You’ll want to pull out your best scope for M106,
          which is tilted to our line of sight much like the more famous
          Andromeda Galaxy (M31) and resembles that object as well. With larger
          apertures, you’ll be able to make out the galaxy’s dust lanes and
          spiral structure. Canes Venatici is home to several other Messier
          objects: galaxies M94, M51, and M63, as well as the globular cluster
          M3.
        </p>
      </section>
    </Page>
  )
}
