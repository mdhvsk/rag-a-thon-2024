import React from 'react'
import { useLocation } from 'react-router-dom'
import './FinalPage.scss'
const FinalPage = () => {

  const location = useLocation()
  const { image } = location.state || {}

  return (
    <div className='final-page'>
    
      <h2>Result</h2>

      <img src={image} className='final-image' alt='final image'/>
      <p>Description</p>
    </div>
  )
}

export default FinalPage