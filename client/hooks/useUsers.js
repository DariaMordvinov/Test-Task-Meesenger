import { useEffect, useState, useCallback } from 'react';
import URI from '../port';

const useUsers = () => {
    const [users, setUsers] = useState([]);

    const handleFetchUsers = useCallback(async() => {
      try {
        const response = await fetch(`${URI}/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
      }} catch(er) {
        console.log(er)
      }
    }, [])
  
    useEffect(() => {
        handleFetchUsers();
    }, []);

    return users;
}

export default useUsers;