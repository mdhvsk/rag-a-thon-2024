import React from 'react'
import UploadButton from '../components/UploadButton'
import QueryBar from '../components/QueryBar'
import teach from '../images/test-teacher.jpg'
import './SearchPage.scss'

const SearchPage = () => {
  return (
    <div className='search-page'>
        <UploadButton/>
        <QueryBar/>
    </div>
  )
}

export default SearchPage