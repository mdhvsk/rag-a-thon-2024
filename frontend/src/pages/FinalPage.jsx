import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom'
import './FinalPage.scss'
const FinalPage = () => {

  const location = useLocation()
  const { image, imageDescription } = location.state || {}

  return (
    <div className='final-page'>


      <h2>Results</h2>


      <div className='content'>

        <div className='left-panel'>
          <img src={image} className='final-image' alt='final image' />
          <p><strong>Estimate Price: </strong>$100.00</p>
        </div>
        <div className='description'>
          <h4>Detailed Description for Manufacturing</h4>
          <ReactMarkdown>{imageDescription}</ReactMarkdown>
        </div>

      </div>

    </div>
  )
}

export default FinalPage