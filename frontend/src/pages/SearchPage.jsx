import React from 'react'
import UploadButton from '../components/UploadButton'
import QueryBar from '../components/QueryBar'
import teach from '../images/test-teacher.jpg'
import './SearchPage.scss'

const SearchPage = () => {
  return (
    <div className='main-page'>
      <h2>Welcome to Precious Pixels</h2>
      <div className='search-page'>
        <QueryBar />

      </div>
    </div>

  )
}

export default SearchPage