import React from 'react';

import styled from 'styled-components';

import Typeahead from './Typeahead';

import data from '../data';

function App(props) {
    // TODO!
    return <Wrapper>

        <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion) => {
            window.alert(suggestion)
        }}
        >

        </Typeahead>
    
    </Wrapper>;
}

const Wrapper = styled('div')`
padding: 40px 20px;
min-width: 800px;
min-height: 500px;
`

export default App;
