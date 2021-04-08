import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../context/useAppContext';

function MyPatients(){

  const { users } = useAppContext();


  return(
    <>
    <h1>Mes patients</h1>
    {users && (
      users.map((user) => (
        <>
        <Link key={user.id} to={{
          pathname: "/dashboard",
          currentUserId: user.id
        }}>
          <p>{user.firstname} {user.lastname}</p>
        </Link>

        </>
      ))
    )}
    </>
  )
}

export default MyPatients;