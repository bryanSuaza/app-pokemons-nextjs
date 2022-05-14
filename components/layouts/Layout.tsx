import Head from 'next/head'
import React, { CSSProperties, FC } from 'react'
import { PropsLayout } from '../../interfaces/props-layout';
import Navbar from '../ui/Navbar';

const styleMain: CSSProperties = {
    padding: '0px 20px' 
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;
const Layout: FC<PropsLayout> = ({children,title}) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name='author' content='Bryan Suaza'/>
            <meta name='description' content={`Informacion sobre el pokemnon ${title}` }/>
            <meta name='keywords' content={`${title}, pokemon`}/>

            <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina que habla sobre ${title}`} />
            <meta property="og:image" content={`${origin}/images/banner.png`} />
        </Head>

        <Navbar />

        <main style={styleMain}>
            { children }
        </main>
    </>
  )
}

export default Layout
