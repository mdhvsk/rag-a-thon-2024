import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';



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
    navigate('/panel', { state: { images: imageUrls }})

}

  return (
    <div className="container mt-3">
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