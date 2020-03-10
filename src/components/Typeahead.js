import React from 'react';
import styled from 'styled-components';

import ListOptions from './ListOptions';

// was : const Typeahead = ({data, handleSelect, suggestions}) => {
const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = React.useState('');
    const [highlightedIndex, setHighlight] = React.useState(0);
    const [choiceMade, setChoiceMade] = React.useState(false);
    const [bookChoice, setBookChoice] = React.useState({});
    // const [hovering, setHover] = React.useState(false);
    // console.log(suggestions)
    let matches = [];
        if (value.length > 1) {
            // console.log('target value', value)
            matches = suggestions.filter( book => book.title.toLowerCase().includes([value.toLowerCase()]) )
            // console.log(matches)
        }
    let indexCounter = -1;

    // React.useEffect(() => {
    //     handleSelect(bookChoice);
    // }, [choiceMade])

    return (
        <>
            <StyledInput
            type='text'
            value={value}
            onChange={(ev) => {
                setValue(ev.target.value);
                console.log(value);
                if (value.length>1) {
                    // console.log(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0]);
                    // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = '';
                    // console.log(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0]);
                }
                setHighlight(0);
                if (value.length>1) {
                    // console.log(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0]);
                    // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = 'palegreen';
                    // console.log(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0]);
                }
            }}
            onKeyDown={ev => {
                if (ev.key === 'Enter') {
                    // handleSelect(ev.target.value);
                    if(!highlightedIndex) return;
                    setChoiceMade(true);
                    handleSelect(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].id);
                    // console.log(document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].id);
                }
                else if (ev.key === 'ArrowUp') {
                    if (highlightedIndex > 0) {
                        // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = '';
                        setHighlight(highlightedIndex-1);
                        // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = 'palegreen';
                        // console.log('highlightedIndex', highlightedIndex);
                    }
                }
                else if (ev.key === 'ArrowDown') {
                    if (highlightedIndex < matches.length -1) {
                        // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = '';
                        setHighlight(highlightedIndex+1);
                        // document.getElementById('masterList').childNodes[highlightedIndex].childNodes[0].style.backgroundColor = 'palegreen';
                    }
                }
                else if (ev.key === 'Escape'){
                    setHighlight(0);
                    setValue('');
                }
                // setTimeout(()=> {console.log('highlightedIndex', highlightedIndex);}, 1000);
                // was using above time out to test timing of when the chnage happens, because it seems that react needs some time
            }}
            />
            <StyledButton onClick={() => setValue('')}>Clear</StyledButton>
            
            {matches.length > 0 &&
                <MasterList id ='masterList'>
                    {matches.map(book => {
                        // console.log('we have a match:', book)
                        indexCounter ++;
                        console.log('counter: ', indexCounter, '     highlightIndex: ', highlightedIndex );
                        if (indexCounter === highlightedIndex){
                            return (
                                <ListOptions
                                    key = {book.title}
                                    // suggestions={suggestions}
                                    handleSelect={handleSelect}
                                    book = {book}
                                    value = {value}
                                    indexCounter = {indexCounter}
                                    setHighlight = {setHighlight}
                                    highlightedIndex = {highlightedIndex}
                                    highlight = 'true'
                                    choiceMade = {choiceMade}
                                    setChoiceMade = {setChoiceMade}
                                    // bookChoice = {bookChoice}
                                    setBookChoice = {setBookChoice}
                                />
                            )
                        }
                        else {
                            return (
                                <ListOptions
                                    key = {book.title}
                                    // suggestions={suggestions}
                                    handleSelect={handleSelect}
                                    book = {book}
                                    value = {value}
                                    indexCounter = {indexCounter}
                                    setHighlight = {setHighlight}
                                    highlightedIndex = {highlightedIndex}
                                    highlight = 'false'
                                    choiceMade = {choiceMade}
                                    setChoiceMade = {setChoiceMade}
                                    // bookChoice = {bookChoice}
                                    setBookChoice = {setBookChoice}
                                />
                            )
                        }
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
padding-left: 0;
margin: 5px 0;
`

export default Typeahead;