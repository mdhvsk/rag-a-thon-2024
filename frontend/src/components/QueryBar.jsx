import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const QueryBar = () => {

const [query, setQuery] = useState("")
const [searching, setSearching] = useState(false)
const navigate = useNavigate()

const imageUrls = [
    '/test-clock.jpg',
    'test-color.jpg',
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
                for (let i = 0; i < response.data.length; i++) {
                    imageUrls.push(response.data[i].filename)
                }
                console.log('Query successfully sent to the API', imageUrls);
                navigate('/panel', { state: { images: imageUrls }})
            } catch (error) {
                console.error('Error querying', error);
            }
    } else {
        console.log('No file selected');
    }

}

  return (
    <div className="container mt-3">
      <h2>Search</h2>
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="what you are looking for?"
        aria-label="Search"
        onChange={handleQueryChange}
        value={query}
      />
      <Button variant="outline-secondary" id="button-search" onClick={handleQuerySearch}>
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