import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';
import { getOneUser, updateStatus } from '../../constants/services/services';

const UpdateUser = () => {

    const [user, setUser] = useState({});
    const [datas ,setData] = useState(false);
    const match = useRouteMatch();
    const history = useHistory();
    

    useEffect(() => {
        getUserData();
    },[]);

    const getUserData = async() => {
        const {id} = match.params; 
        try{
            const {data} = await getOneUser(id);
            console.log(data)
            setData(true);
            setUser(data);
            console.log(user)
        }catch (err) {
            console.log(err);
        }
    }

//      const getUserData = async () => {
//         return new Promise(async (resolve, reject) => {
//         const {id} = match.params; 
//       try {
//         const {data} = await getOneUser(id);
//         setUser(data);
//         console.log(data)
//         console.log(user)
//         resolve(data);
//         //setNewCoutry(false);
//       } catch (err) {
//         console.error(err);
//         reject(err);
//       }
//     });
//   };

  const formik = useFormik({
    initialValues: {
        firstName: user.firstName,
        lastName: user.lastName,
        address: "",
        city: ""
      }
})

    // const getUserData = async() => {
    //     const {id} = match.params; 
    //     try{
    //         const {data} = await getOneUser(id);
    //         setUser(data);
    //         console.log(data)
    //     }catch (err) {
    //         console.log(err);
    //     }
    // }


    const updateUserHandler = async(e) => {
        e.preventDefault();
        const {id} = match.params;
        try{
            await updateStatus(id,formik.values);
            history.push(getMainViewRoute())
        }catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            
            <form action="#">
                <div >

                <label  htmlFor="firstName"></label>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                    value="firstName"
                    {...formik.getFieldProps("firstName")}
                />
                </div>

                <div>
                    
                <label htmlFor="lastName"></label>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    {...formik.getFieldProps("lastName")}
                />
                </div>

                <div>
                <label htmlFor="address"></label>
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    id="address"
                    {...formik.getFieldProps("address")}
                />
                </div>

                <div>
                <label htmlFor="city"></label>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    id="city"
                    {...formik.getFieldProps("city")}
                />
                </div>
                <button onClick={updateUserHandler}>Update</button>
          </form>
        </div>
    )
}
export default UpdateUser;