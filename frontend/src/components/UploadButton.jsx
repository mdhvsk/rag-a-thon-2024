import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Form } from 'react-router-dom';
import './UploadButton.scss'
import { FileUploader } from "react-drag-drop-files";
import { Spinner } from 'react-bootstrap';



const UploadButton = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (file) => {
        setFile(file);
        console.log(file)
    };


    const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "PDF", "ZIP"];


    const handleFileUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('description', 'This is a test description')
            setUploading(true)
            try {
                const response = await axios.post('http://localhost:8000/images', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File successfully sent to the API', response.data);
                setUploading(false)
                setSuccessMessage('Successfully uploaded to database')

            } catch (error) {
                console.error('Error uploading file', error);
                setErrorMessage('Failed to upload to database')
            }
        } else {
            console.log('No file selected');
        }
    };


    return (
        <div className='upload'>
            <h2>Upload Files</h2>
            <p>Upload Documents to store in a vector database</p>

            <div className='content'>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                {file && (<p>File chose: {file.name}</p>)}
                <Button onClick={handleFileUpload}>Send to DB</Button >
            </div>
            {uploading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {successMessage && (<p className='success'>{successMessage}</p>)}
            {errorMessage && (<p className='warning'>{errorMessage}</p>)}


        </div>
    )
}

export default UploadButton