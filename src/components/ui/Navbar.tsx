import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"


export const Navbar = () => {

  const { theme } = useTheme()
  
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: theme?.colors.gray100.value
      }}
    >
      <Link href="/">
        <Image
          className="image"
          src={ "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" }
          alt={ 'pikachu' }
          width={ '70' }
          height={ '70' }
        />
        <Text color="white" h2 className="navbar__text">P</Text>
        <Text color="white" h3 className="navbar__text">okemon</Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      
      <Link href='/favorites'>
        <Text color="white" h3 className="navbar__text">favorites</Text>
      </Link>
    </div>
  )
}