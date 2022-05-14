import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React, { CSSProperties } from 'react'


const Navbar = () => {

  const { theme } = useTheme();

  const styleNavbar: CSSProperties = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0x 20px',
    backgroundColor: theme?.colors.gray50.value
  }


  return (
    <div style={styleNavbar}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favoritos" css={{margin: '10px'}}>
        <Text color='white'>Favoritos</Text>
      </Link>
    </div>
  )
}

export default Navbar
