import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

    const handleChange = (event) => {
        setNewFriend({ ...newFriend, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => console.log('friend res', res))
            .catch(err => console.error('error', err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={newFriend.name} onChange={event => handleChange(event)} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={newFriend.age} onChange={event => handleChange(event)} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={newFriend.email} onChange={event => handleChange(event)} />
                <button>Submit</button>
            </label>
        </form>
    )
}

export default FriendForm;