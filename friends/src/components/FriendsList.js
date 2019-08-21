import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState({});

    useEffect(() => {
        getData();
    }, [])

    const deleteItem = (id) => {
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`, deleteItem)
            .then(res => console.log('delete res', res))
            .catch(err => console.error('error', err))
        getData();
    }

    const editItem = (id) => {
        const itemToEdit = friendsList.find(item => item.id === id);
        setIsEditing(true);
        setEditedItem(itemToEdit);
    }

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

    return (
        <>
            <FriendForm edit={isEditing} setEdit={setIsEditing} item={editedItem} retrieve={getData}/>
            {friendsList.map(friend => <Friend key={friend.id} info={friend} delete={deleteItem} edit={editItem}/> )}

        </>
    )
}

export default FriendsList;