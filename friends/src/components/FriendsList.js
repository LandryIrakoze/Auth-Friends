import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const deleteItem = (id) => {
        const deletedList = friendsList.filter(item => item.id !== id);
        const deletedItem = friendsList.filter(item => item.id === id);
        setFriendsList(deletedList);
        axiosWithAuth()
            .delete('http://localhost:5000/api/friends/${id}', deleteItem)
            .then(res => console.log('delete res', res))
            .catch(err => console.error('error', err))
    }

    // const editItem = (id) => {
    //     setFriendsList = friendsList.
    // }

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
            {friendsList.map(friend => <Friend key={friend.id} info={friend} delete={deleteItem}/> )}

        </>
    )
}

export default FriendsList;