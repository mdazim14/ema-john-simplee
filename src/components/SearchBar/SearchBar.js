import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({handleSearch}) => {

    return (
        <div className=''>
            <InputGroup className="" >
                <Form.Control
                    placeholder="Search your product"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                    // size='lg'
                    onBlur={ (event) => handleSearch(event)}
                />
                <Button  variant="primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default SearchBar;