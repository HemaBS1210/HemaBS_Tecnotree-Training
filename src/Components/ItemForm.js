import React, { useState } from "react";

function ItemForm({ onsubmit }){
    const[inputValue, setInputValue] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        onsubmit(inputValue);
        setInputValue('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Add new item:
                <input type ="text" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} />
            </label>
        </form>
    );
}
export  default ItemForm;