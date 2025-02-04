import Head from 'next/head'
import { Arrows, Logo } from '@/components/Icons'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Team 4788</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="page">
        <hero-no-padding>
          <div className="column">
            <Logo className="logo" />
            <Marquee speed={25} gradient={false} style={{ opacity: 0.80 }}>
              <h1>Can&apos;t Control//</h1>
            </Marquee>
            <Arrows className="arrows" />
          </div>
        </hero-no-padding>
        <heros>
          <h2>More Content</h2>
          <p>content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content </p>
          <h2>More Content</h2>
          <h2>More Content</h2>
          <h2>More Content</h2>
        </heros>
      </div>
    </>
  )
}
