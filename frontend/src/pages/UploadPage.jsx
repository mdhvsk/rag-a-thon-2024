import React from 'react'
import UploadButton from '../components/UploadButton'
import './UploadPage.scss'

const UploadPage = () => {
    return (
        <div className='upload-page'>
            <h2>Upload documents to store to a vector DB</h2>
            <div className='content'>
                <UploadButton />
            </div>
        </div>
    )
}

export default UploadPage