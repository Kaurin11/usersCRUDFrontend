import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import Button from '../../components/button/button';
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
            <div className="user-info">
                <div className="user-info__card">
                    <div className="user-info__content">
                        <p><strong>First Name</strong> :{user.firstName}</p>
                        <p><strong>Last Name</strong> : {user.lastName}</p>
                        <p><strong>Address</strong> :{user.address}</p>
                        <p><strong>City</strong>: {user.city}</p>
                        <p><strong>Status</strong> : {user.status === true ? ('Active') : ('Not Activ')}</p> 
                    </div>
                    
                </div>
                <Button  className="btn btn__hello user-info__btn" onClick={() => backToBikesHandler()} name={'Back'} />
            </div>
        )}

            
        </div>
    )
}

export default User;