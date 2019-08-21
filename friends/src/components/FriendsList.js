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
        // const deletedList = friendsList.filter(item => item.id !== id);
        // const deletedItem = friendsList.filter(item => item.id === id);
        // setFriendsList(deletedList);
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`, deleteItem)
            .then(res => console.log('delete res', res))
            .catch(err => console.error('error', err))
    }

    const editItem = (id) => {
        console.log(friendsList);
        const itemToEdit = friendsList.find(item => item.id === id);
        setIsEditing(true);
        setEditedItem(itemToEdit);
        console.log('to edit', editedItem);
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

    console.log('friendslist', friendsList);

    return (
        <>
            <FriendForm edit={isEditing} setEdit={setIsEditing} item={editedItem}/>
            {friendsList.map(friend => <Friend key={friend.id} info={friend} delete={deleteItem} edit={editItem}/> )}

        </>
    )
}

export default FriendsList;