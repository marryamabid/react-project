import React from "react";
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
        <>
            <h1 className="bg-gray-700 text-3xl text-center text-white">User: {userId}</h1>
        </>
    );
}

export default User;