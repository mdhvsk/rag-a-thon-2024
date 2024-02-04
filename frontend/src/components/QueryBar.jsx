import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './QueryBar.scss'


const QueryBar = () => {

const [query, setQuery] = useState("")
const [searching, setSearching] = useState(false)
const navigate = useNavigate()

const imageUrls = [
    '/test-clock.jpg',
    'test-dog.jpeg',
    'test-paper.jpg',
    'test-student.jpg',
    'test-teacher.jpg'
]
const handleQueryChange = (e) => {
    setQuery(e.target.value);
}

const handleQuerySearch = async () => {
// Handle api request to query
    setSearching(true)
    if (query) {
            const formData = new FormData();
            formData.append('search_query', query);
            formData.append('iteration', 'first')
            formData.append('fine_tuning_prompt', '')

        try {
                const response = await axios.post('http://localhost:8000/image-rag', formData,);
                let imageUrls = []
                let prices = []
                for (let i = 0; i < response.data.length; i++) {
                    imageUrls.push(response.data[i].filename)
                    prices.push(response.data[i].description)
                }
                console.log('Query successfully sent to the API', imageUrls);
                navigate('/panel', { state: { images: imageUrls , prices: prices}})
            } catch (error) {
                console.error('Error querying', error);
            }
    } else {
        console.log('No file selected');
    }

}

  return (
    // <div className="container mt-3">
    <div className="query-bar">

      <h3>Search</h3>
      <p>Find images based on your request</p>

    <InputGroup className='bar'>
      <Form.Control
        type="text"
        placeholder="what you are looking for?"
        aria-label="Search"
        onChange={handleQueryChange}
        value={query}
      />
      <Button  id="button-search" onClick={handleQuerySearch}>
        Search
      </Button>
    </InputGroup>
    {searching && (    
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    )}
  </div>  
  )
}

export default QueryBar