import React from 'react'
import Details from '../details/detailsComponent'
import Image from '../image/imageComponent'
import Title from '../title/titleComponent'
import { Link } from 'react-router-dom'


const CharacterCardComponent = (props) => {

  return (
    <Link to={`${props.page}${props.id}`} className='cardArchitecture'>
      <div className='image'>
        <Image  url={props.imagen}/>
      </div>
      <div className='circle'>
        {props.estatus}
      </div>
      <div className='content'>
        <div className='title'>
          <Title text={props.nombre}/>
        </div>
        <div className='detail'>
          <Details genero={props.genero}/>
        </div>
      </div>  
      
    </Link>
  )
}

export default CharacterCardComponent