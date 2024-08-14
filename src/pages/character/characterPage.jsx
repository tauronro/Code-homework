import React from 'react'
import RAMCharacterCardComponent from '../../components/rickAndMortyCharacterCard/RAMCharacterCardComponent'
import NavbarComponent from '../../components/navbar/navbarComponent'

const CharacterPage = () => {
  
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
      <NavbarComponent />
      </header>
      <div className="relative isolate m-20 px-6 pt-14 lg:px-8">
      <div className='container-global'>
          <RAMCharacterCardComponent />
      </div>
      </div>
      
    </div>
      
  )
}

export default CharacterPage