import React from 'react';
import styled from 'styled-components';

const ListOptions = ({handleSelect, book, value, indexCounter, setHighlight, highlightedIndex, highlight, choiceMade, setChoiceMade, setBookChoice}) => {
    // console.log('props', book)

    // React.useEffect(() => {
    //   if (indexCounter ===highlightedIndex) {
    //     handleSelect(book.title);
    //   }
    // }, [choiceMade])

    let positionStart = book.title.toUpperCase().search(value.toUpperCase())
    let positionEnd = value.length + positionStart;
    
    let before = book.title.substring(0, positionStart);
    let current = book.title.substring(positionStart, positionEnd);
    let after = book.title.substring(positionEnd, book.title.length);
    // console.log('before', before)
    // console.log('current', current)
    // console.log('after', after)
    console.log('hightlight is', highlight);
    if (highlight==='true') {
        return (
            // onHover={ev => {console.log('hovering on', props.book)}}
                    <BookListingH
                    onClick={(ev) => {
                        
                        setHighlight(indexCounter);
                        setChoiceMade(true);
                        setBookChoice(book.title);
                        // React.useEffect(() => {
                            handleSelect(book.title);
                        // }, [setHighlight])
                    }}
                    >
                        <SingleListing 
                        id = {book.title}
                        >
                            <span>
                            {`${before}`}
                            </span>
                            <Boldme>{`${current}`}</Boldme>
                            <span>{`${after}  A `}</span>
                            <PurpleItalics>{book.categoryId}</PurpleItalics>
                            <span>{` novel written by: ${book.author}`}</span>
                            {/* {`${book.title}  A ${book.categoryId} novel written by: ${book.author}`} */}
                        </SingleListing>
                    </BookListingH>
        )
    }
    else {
        return (
            // onHover={ev => {console.log('hovering on', props.book)}}
                    <BookListing
                    onClick={(ev) => {
                        setHighlight(indexCounter);
                        setChoiceMade(true);
                        setBookChoice(book.title);
                        handleSelect(book.title);
                    }}
                    >   
                        <SingleListing 
                        id = {book.title}
                        >
                            <span>
                            {`${before}`}
                            </span>
                            <Boldme>{`${current}`}</Boldme>
                            <span>{`${after}  A `}</span>
                            <PurpleItalics>{book.categoryId}</PurpleItalics>
                            <span>{` novel written by: ${book.author}`}</span>
                            {/* {`${book.title}  A ${book.categoryId} novel written by: ${book.author}`} */}
                        </SingleListing>
                    </BookListing>
        )
    }
};

// {id: "the-authorities", categoryId: "sci-fi-fantasy", title: "The Authorities", author: "Scott Meyer"}

const BookListing = styled('li')`
    display: flex;
    flex-direction: column;
    background-color: '';
    /* &:hover {
        background-color: palegreen; */
`
const BookListingH = styled('li')`
    display: flex;
    flex-direction: column;
    background-color: palegreen;
`
const Boldme = styled('span')`
    font-weight: bold;
    margin: 0;
`
const PurpleItalics = styled('span')`
    font-style: italic;
    color: violet;
`

const SingleListing = styled('div')`
    /* display: flex;
    flex-direction: row; */
`

export default ListOptions;