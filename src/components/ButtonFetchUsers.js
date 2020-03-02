import React from 'react';

const ButtonFetchUsers = props => {
    return (
        <button style={{
            padding: '20px 30px',
            fontSize: '20px',
            border: '2px solid black',
            backgroundColor: 'white',
            margin: '20px',
        }} onClick={props.click}>Add User</button>
    );
}

export default ButtonFetchUsers;