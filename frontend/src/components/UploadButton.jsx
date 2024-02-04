import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
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

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile)
    };

    const fileTypes = ["JPG", "PNG", "GIF", "PDF", "ZIP"];


    const handleFileUpload = async () => {
        // if (selectedFile) {
        //     const formData = new FormData();
        //     formData.append('file', selectedFile);

        //     try {
        //         const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        //             headers: {
        //                 'Content-Type': 'multipart/form-data',
        //             },
        //         });
        //         console.log('File successfully sent to the API', response.data);
        //     } catch (error) {
        //         console.error('Error uploading file', error);
        //     }
        // } else {
        //     console.log('No file selected');
        // }
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
            <Button>Send to DB</Button>
            </div>

        </div>
    )
}

export default UploadButton