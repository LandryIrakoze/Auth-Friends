import React from 'react';

const Friend = (props) => {

    const { info } = props;
    console.log('props', props);

    return (
        <>
            <p>name: {info.name}</p>
            <p>age: {info.age}</p>
            <p>email: {info.email}</p>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default Friend;