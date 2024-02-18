import React, { useState, useEffect } from 'react';
import { Dropdown, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LocationOption from './LocationOption.components';


const SearchBar = ({ locationSetter }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (searchQuery === '') {
            setSearchResults([])
            return
        }

        fetch('http://localhost:4000/navbar/search_location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                searchText: searchQuery
            }),
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 204) {
                    return { results: [] };
                } else {
                    console.log('Error:', response.statusText);
                    return { results: [] };
                }
            })
            .then(data => {
                setSearchResults(data.results);
            })
            .catch(error => {
                console.error('Error:', error);
            })


    }, [searchQuery]);

    return (

        <Form inline>
            <div style={{ position: 'relative', width: '100%' }}>
                <FontAwesomeIcon
                    icon={faSearch}
                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                />
                <FormControl
                    type="text"
                    placeholder="חפש"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ paddingLeft: '30px', width: '100%' }}
                />
            </div>

            <Dropdown show={searchResults.length > 0}>
                <Dropdown.Menu style={{ width: '100%', textAlign: 'right' }}>
                    {searchResults.map((result, index) => (
                        <LocationOption optData={result} optIndex={index} locationSetter={locationSetter} searchQuerySetter={setSearchQuery} />
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </Form>

    );
};

export default SearchBar;
