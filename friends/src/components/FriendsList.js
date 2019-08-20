import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('response', res);
                setFriendsList(res.data);
            })
            .catch(err => {
                console.log('error', err);
            })
    }

    console.log('friendslist', friendsList);

    return (
        <>
            <FriendForm />
            {friendsList.map(friend => <Friend id={friend.id} info={friend} /> )}

        </>
    )
}

export default FriendsList;