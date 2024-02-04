import React, { useEffect, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import './PanelPage.scss'
import { Button, InputGroup } from 'react-bootstrap';

const PanelPage = ({ }) => {

    const location = useLocation()
    const { images } = location.state || {}
    const [checkedStates, setCheckedStates] = useState(new Array(images.length).fill(false))
    const [renderForm, setRenderForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleCheckboxChange = (id) => (event) => {
        let newArr = [...checkedStates]
        let currVal = newArr[id]
        newArr[id] = !currVal
        setCheckedStates(newArr)
    };

    const toggleRenderForm = () => {
        if (renderForm === true) {
            setRenderForm(false)
        }
        else {
            setRenderForm(true)
        }
    }

    const handleFinalImage = () => {
        const trueCount = checkedStates.filter(value => value).length;
        
        if (trueCount === 1) {
            console.log("Horray")
            const trueIndex = checkedStates.findIndex(value => value === true);
            let imgArg = images[trueIndex]
  
            // api call for description
            console.log("imgArg: " + imgArg)
            navigate('/final', { state: { image: imgArg }})
            setErrorMessage('')
        }
        else {
            setErrorMessage("Only one image can be selected")
        }

    }


    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);

    }

    const handleSubmitQuery = async (e) => {
        e.preventDefault()
        // make api call
        let imgArgs = []
        for (let i = 0; i < checkedStates.length; i++){
            if(checkedStates[i] === true){
                imgArgs.push(images[i])
            }
        }

        console.log(imgArgs)
        console.log(query)
        //hand over image urls and text prompt to 


        // reset state with new imageurls and original values
        setCheckedStates(new Array(images.length).fill(false))
        setRenderForm(false)
        setErrorMessage('')
        setSelectedOption('')
        setQuery('')

    }

    return (
        <div className='panel-page'>
            <div className='image-list'>
                {images && images.map((file, index) => (
                    <div className='image-container'>

                        {checkedStates[index] ? (
                            <img
                                key={index} src={file} alt={`Gallery item ${index}`}
                                className='image-selected'
                            />
                        ) : (
                            <img
                                key={index} src={file} alt={`Gallery item ${index}`}
                                className='image-hover'
                            />
                        )}

                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={checkedStates[index]}
                                onChange={handleCheckboxChange(index)}
                                className="image-checkbox"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className='panel-decision'>
                <Button class="btn btn-success" onClick={handleFinalImage}>Finalize Image</Button>
                <Button class="btn btn-warning" onClick={toggleRenderForm}>Create New Image</Button>
            </div>

            {errorMessage && (<p className='warning'>Only one image can be selected</p>)}

            {renderForm && <div>
                <form>
                    <label>
                        Yes
                        <input
                            type="radio"
                            name="yesNo"
                            value="yes"
                            onChange={handleRadioChange}
                            checked={selectedOption === 'yes'}
                        />
                    </label>
                    <label>
                        No
                        <input
                            type="radio"
                            name="yesNo"
                            value="no"
                            onChange={handleRadioChange}
                            checked={selectedOption === 'no'}
                        />
                    </label>
                    <input
                        type="text"
                        placeholder="Your text here"
                        disabled={selectedOption !== 'yes'}
                        style={{ marginLeft: '10px' }}
                        onChange={handleQueryChange}
                        value={query}
                    />

                    <Button onClick={handleSubmitQuery}>Submit</Button>
                </form>

            </div>}

        </div>

    )
}

export default PanelPage