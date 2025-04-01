import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(({ data }) => setUsers(data));
    }, [])

    return (
        <div>
            <h1>Frontend!!!!!</h1>
            <h2>Users:</h2>
            {users.map(user => (
                <div key={user._id}>{JSON.stringify(user)}</div>
            ))}
        </div>
    );
};

