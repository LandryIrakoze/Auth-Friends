import React from 'react';

const Friend = (props) => {

    // const { info } = props;
    
    console.log('props', props);


    return (
        <>
            <p>name: {props.info.name}</p>
            <p>age: {props.info.age}</p>
            <p>email: {props.info.email}</p>
            <button onClick={() => props.edit(props.info.id)}>Edit</button>
            <button onClick={() => props.delete(props.info.id)}>Delete</button>
        </>
    )
}

export default Friend;

//add GET request to  /api/friends/:id  HERE