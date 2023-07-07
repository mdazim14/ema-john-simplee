import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({handleSearch}) => {

    return (
        <div className=''>
            <h1>Last work in january and last push on 7/08/2023 </h1>
            <InputGroup className=""  
            // onBlur={ (event) => handleSearch(event)} 
            >
                <Form.Control
                    placeholder="Search your product"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                    // size='lg'
                    onChange={ (event) => handleSearch(event)}
                />
                <Button  variant="primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default SearchBar;