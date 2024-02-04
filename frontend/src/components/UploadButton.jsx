import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Form } from 'react-router-dom';
import './UploadButton.scss'
import { FileUploader } from "react-drag-drop-files";



const UploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);

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

            try {
                const response = await axios.post('http://localhost:8000/images', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File successfully sent to the API', response.data);
            } catch (error) {
                console.error('Error uploading file', error);
            }
        } else {
            console.log('No file selected');
        }
    };


    return (
        <div className='upload'>
            <h2>
                Upload Files
            </h2>



            {/* <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload">
                <button onClick={() => document.getElementById('file-upload').click()}>
                    Upload File
                </button>
            </label>

            <button onClick={handleFileUpload} disabled={!selectedFile}>
                Send File to DB
            </button> */}

            <div className='content'>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            <Button onClick={handleFileUpload}>Send to DB</Button >
            </div>

        </div>
    )
}

export default UploadButton