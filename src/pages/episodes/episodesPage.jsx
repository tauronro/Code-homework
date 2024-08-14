import React from 'react'
import EpisodesComponent from '../../components/episodesRickMorty/episodesComponent'
import NavbarComponent from '../../components/navbar/navbarComponent'

const EpisodesPage = () => {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
      <NavbarComponent />
      </header>

      <div className="relative isolate m-20 px-6 pt-14 lg:px-8">
      <EpisodesComponent />
      </div>
      
    
    </div>
  )
}

export default EpisodesPage