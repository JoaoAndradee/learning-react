import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 2px solid #000;
    margin: 5px;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
`;

function SearchBox(props) {
    
    const [texto, setTexto] = useState('');

    function handleKeyUp(e) {
        if(e.keyCode == 13 ) {
            if(props.onEnter) {
                props.onEnter(texto);
            }
            setTexto('');
        }
    };
    
    return (
        <InputText
        placeholder={props.frasePadrao}
        type="text"
        value={texto}
        onChange={(e) => {setTexto(e.target.value)}}
        onKeyUp={handleKeyUp}
        />

    );
};

export default SearchBox;