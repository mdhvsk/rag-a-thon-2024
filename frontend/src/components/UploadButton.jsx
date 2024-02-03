import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


const UploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

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
        <div>
            <h1>
                Upload Button
            </h1>

            <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload">
                <button onClick={() => document.getElementById('file-upload').click()}>
                    Upload File
                </button>
            </label>
            <button onClick={handleFileUpload} disabled={!selectedFile}>
                Send File to API
            </button>
        </div>
    )
}

export default UploadButton