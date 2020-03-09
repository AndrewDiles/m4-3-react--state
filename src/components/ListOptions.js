import React from 'react';
import styled from 'styled-components';




const ListOptions = ({suggestions, handleSelect, book, value}) => {
// const ListOptions = (props) => {
    console.log('props', book)
    
    let positionStart = book.title.toUpperCase().search(value.toUpperCase())
    let positionEnd = value.length + positionStart;
    let current = value;
    
    let before = book.title.substring(0, positionStart);
    let after = book.title.substring(positionEnd, book.title.length);
    console.log('before', before)
    console.log('current', current)
    console.log('after', after)

    return (
        // onHover={ev => {console.log('hovering on', props.book)}}
                <BookListing
                onClick={(ev) => handleSelect(book.title)}
                >   
                    <SingleListing>
                        {`${before}`}
                        <Boldme>{`${current}`}</Boldme>
                        {`${after}  A ${book.categoryId} novel written by: ${book.author}`}
                        {/* {`${book.title}  A ${book.categoryId} novel written by: ${book.author}`} */}
                    </SingleListing>
                </BookListing>
    )
};

// break it up into before found, the found and after found

// {id: "the-authorities", categoryId: "sci-fi-fantasy", title: "The Authorities", author: "Scott Meyer"}

const BookListing = styled('li')`
    display: flex;
    flex-direction: column;
    &:hover {
        background-color: palegreen;
}
`
const Boldme = styled('p')`
    font-weight: bold;
    margin: 0;
`

const SingleListing = styled('div')`
    display: flex;
    flex-direction: row;
`

export default ListOptions;