import React from 'react';
import styled from 'styled-components';

import ListOptions from './ListOptions';

// was : const Typeahead = ({data, handleSelect, suggestions}) => {
const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = React.useState('');
    // const [hovering, setHover] = React.useState(false);
    // console.log(suggestions)
    let matches = [];
        if (value.length > 1) {
            // console.log('target value', value)
            matches = suggestions.filter( book => book.title.toLowerCase().includes([value.toLowerCase()]) )
            // console.log(matches)
        }

    return (
        <>
            <StyledInput
            type='text'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={ev => {
                if (ev.key === 'Enter') {
                    handleSelect(ev.target.value);
                }
            }}
            />
            <StyledButton onClick={() => setValue('')}>Clear</StyledButton>

            {matches.length > 0 &&
                <MasterList>
                    {matches.map(book => {
                        // console.log('we have a match:', book)
                        return (
                            <ListOptions
                                suggestions={suggestions}
                                handleSelect={handleSelect}
                                book = {book}
                                value = {value}
                            />
                        )
                    })}
                </MasterList>
            }
        </>
    )   
};
const StyledInput = styled('input')`
    width: 200px;
`
const StyledButton = styled('button')`
    background-color: royalblue;
    color: white;
    border-radius: 5px;
    margin-left: 5px;
    padding: 5px 15px;
`
const MasterList = styled('ul')`
list-style: none;
display: flex;
flex-direction: column;
border-color: grey;
border: 2px dashed;
border-radius: 5px;

`

export default Typeahead;