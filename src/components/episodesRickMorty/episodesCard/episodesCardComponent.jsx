import React from 'react'
import TitleComponent from '../title/titleComponent'
import DetailComponent from '../detail/detailComponent'
import DateComponent from '../date/dateComponent'
import './episodesCardComponent.css'

const EpisodesCardComponent = (props) => {
  return (
    <div className='cardArchitecture'>
      <div className='title'>
        <TitleComponent title={props.title} />
      </div>
      <div className='content'>
        <div className='detail'>
          <DetailComponent episode={props.episode}/>
        </div>
        <div className='date'>
          <DateComponent date={props.date}/>
        </div>
      </div>  
      
    </div>
  )
}

export default EpisodesCardComponent