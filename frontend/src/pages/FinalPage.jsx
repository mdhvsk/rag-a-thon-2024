import React from 'react'
import { useLocation } from 'react-router-dom'
import './FinalPage.scss'
const FinalPage = () => {

  const location = useLocation()
  const { image } = location.state || {}

  return (
    <div className='final-page'>
    

      <h4>Results</h4>

      <div className='content'>
      <img src={image} className='final-image' alt='final image'/>
      <p>Description</p>
      </div>

    </div>
  )
}

export default FinalPage