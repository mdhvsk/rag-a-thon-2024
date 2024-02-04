import React, { useEffect, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import './PanelPage.scss'
import { Button, InputGroup, Modal } from 'react-bootstrap';

const PanelPage = ({ }) => {

    const location = useLocation()
    const { images } = location.state || {}
    const [checkedStates, setCheckedStates] = useState(new Array(images.length).fill(false))
    const [errorMessage, setErrorMessage] = useState('')
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    const handleCheckboxChange = (id) => (event) => {
        let newArr = [...checkedStates]
        let currVal = newArr[id]
        newArr[id] = !currVal
        setCheckedStates(newArr)
    };


    const handleFinalImage = () => {
        const trueCount = checkedStates.filter(value => value).length;

        if (trueCount === 1) {
            console.log("Horray")
            const trueIndex = checkedStates.findIndex(value => value === true);
            let imgArg = images[trueIndex]

            // api call for
            console.log("imgArg: " + imgArg)
            navigate('/final', { state: { image: imgArg } })
            setErrorMessage('')
        }
        else {
            setErrorMessage("Only one image can be selected")
        }

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);

    }

    const handleSubmitQuery = async (e) => {
        handleClose()
        e.preventDefault()
        // make api call
        let imgArgs = []
        for (let i = 0; i < checkedStates.length; i++) {
            if (checkedStates[i] === true) {
                imgArgs.push(images[i])
            }
        }

        console.log(imgArgs)
        console.log(query)
        //hand over image urls and text prompt to 


        // reset state with new imageurls and original values
        setCheckedStates(new Array(images.length).fill(false))
        setErrorMessage('')
        setQuery('')

    }

    return (

        <div className='panel-page'>
            <h2>Choose the pictures you like</h2>
            <div className='panel-decision'>
                <Button class="btn btn-success" onClick={handleFinalImage}>Finalize Image</Button>
                <Button class="btn btn-warning" onClick={handleShow}>Create New Image</Button>
            </div>
            {errorMessage && (<p className='warning'>Only one image can be selected</p>)}

            <div className='image-list'>
                {images && images.map((file, index) => (
                    <>
                        {checkedStates[index] ? (
                            <div className='item-card-selected'>
                                <div className='image-container'>
                                    <img
                                        key={index} src={file} alt={`Gallery item ${index}`}
                                        className='image-selected'
                                    />
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={checkedStates[index]}
                                            onChange={handleCheckboxChange(index)}
                                            className="image-checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='item-card'>
                                <div className='image-container'>
                                    <img
                                        key={index} src={file} alt={`Gallery item ${index}`}
                                        className='image-hover'
                                    />
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={checkedStates[index]}
                                            onChange={handleCheckboxChange(index)}
                                            className="image-checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>





            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new image</Modal.Title>
                </Modal.Header>
                <Modal.Body>Add more detail
                    <input
                        type="text"
                        placeholder="Your text here"
                        style={{ width: '100%' }}
                        onChange={handleQueryChange}
                        value={query}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitQuery}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default PanelPage