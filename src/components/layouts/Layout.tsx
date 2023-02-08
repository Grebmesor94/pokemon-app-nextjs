import Head from "next/head"
import { ReactElement } from "react"
import { Navbar } from "../ui";

interface Props { 
  children: ReactElement | ReactElement[]
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout = ({ children, title }: Props ) => {
  return (
    <>
      <Head>
        <title>{ title ?? 'Pokemon App'}</title>
        <meta name="author" content="Rosemberg Lucena" />
        <meta name="description" content={`information about the pokemon, ${ title }`} />
        <meta name="kewords" content={ `pokemon, pokedex, ${ title }` } />


        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/banner.png`} />
      </Head>

      <Navbar />

      <main
        className="main-container"
      >
        { children }
      </main>
    </>
  )
}
