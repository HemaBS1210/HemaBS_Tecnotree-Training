import react from 'react';
function GoogleButton(){
    var handleClick=()=>{

        window.location.href = 'https://www.google.com';
    };
    return(
        <button onClick={handleClick}>
            google
        </button>
    );
}
export default GoogleButton;
