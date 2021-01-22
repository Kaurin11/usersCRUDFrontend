import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';
import { getOneUser } from '../../constants/services/services';

const User = () => {

    const [user, setUser] = useState(null);
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        getUserData();
    },[])

    const getUserData = async() => {
        const {id} = match.params; 
        try{
            const {data} = await getOneUser(id);
            console.log(data)
            setUser(data);
            console.log(user)
        }catch (err) {
            console.log(err);
        }
    }
    
    const backToBikesHandler = () => {
        history.push(getMainViewRoute());
    }

    return(
        <div>
            {user && (
            <div>
            <div>First Name :{user.firstName}</div>
            <div>Last Name : {user.lastName}</div>
            <div>Address :{user.address}</div>
            <div>City : {user.city}</div>
            <div>Status : {user.status === true ? ('Active') : ('Not Activ')}</div>
            </div>
        )}

            <button onClick={() => backToBikesHandler()}>Back</button>
        </div>
    )
}

export default User;