import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = (props) => {
    const { edit, setEdit, item, retrieve } = props;
    const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

    const handleChange = (event) => {
        if(edit) {
            setNewFriend({...item, [event.target.name]: event.target.value})
        } else {
            setNewFriend({ ...newFriend, [event.target.name]: event.target.value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!edit) {
            axiosWithAuth()
                .post('http://localhost:5000/api/friends', newFriend)
                .then(res => console.log('friend res', res))
                .catch(err => console.error('error', err))
            retrieve();
        } else {
            axiosWithAuth()
                .put(`http://localhost:5000/api/friends/${item.id}`, newFriend)
                .then(res => {
                    console.log('response', res)
                })
                .catch(err => {
                    console.log('error', err)
                })
            retrieve();
        }
        setEdit(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={newFriend.name} onChange={event => handleChange(event)} />
            </label>
            <label>
                Age:
                <input type="number" name="age" value={newFriend.age} onChange={event => handleChange(event)} />
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