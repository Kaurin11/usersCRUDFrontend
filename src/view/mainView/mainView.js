import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';
import { generateGetOneUserRoute, genereteUpdateUserRoute, getCreateUserRoute, getOneUserRoute } from '../../constants/routes/routes';
import { deleteUser, getAllUsers, updateStatus } from '../../constants/services/services';

import "./style.scss";

const MainView = () => {

    const[users, setUser] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getData()
    }, []);

    const getData =async () => {
        try {
        const {data} = await getAllUsers();
        setUser(data);
        } catch (err) {
            console.log(err)
        }
    }

    const statusHandler = async (id, status) => {
        try {
        await updateStatus(id, {status: !status})
        await getData()
        } catch (err) {
            console.log(err)
        }
    }

    const createHandler = () => {
        history.push(getCreateUserRoute());
    }

    const deleteHandler =async (id) => {
        try{
            await deleteUser(id);
            await getData();
        } catch(err) {
            console.log(err);
        }
    }

    const oneUserHandler = (id) => {
        history.push(generateGetOneUserRoute(id));
    }

    const updateUserHandler = (id) => {
        history.push(genereteUpdateUserRoute(id));
    }

    

    return(
        <div className="main-view">
            <Header />
            <Sidebar />
            <table className="section-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {users.map((user) => (
                            <tr key={user.firstName + user.address} >
                                <td onClick={()=>oneUserHandler(user.id)}>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address} </td>
                                <td>{user.city}</td>
                                {user.status === true ? (<td>Active</td>) : (<td>Not Activ</td>)}
                                <div>
                                    <td>
                                        <button className="btn" onClick={() =>statusHandler(user.id, user.status)}>Change Status</button>
                                        <button className="btn" onClick={() =>deleteHandler(user.id)}>Delete User</button>
                                        <button className="btn" onClick={() =>updateUserHandler(user.id)}>Update User</button>
                                    </td>
                                </div>
                                
                            </tr>
                            
                        ))}
                </tbody>
            </table>
            <div>
                <button className="btn btn-create" onClick={createHandler}>Create new User</button>
            </div>
        </div>
    )
}

export default MainView;