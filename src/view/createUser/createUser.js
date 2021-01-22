import { useFormik,Field } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';
import { createUser } from '../../constants/services/services';

const CreateUser = () => {

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            status: false
          }
    })

    const createUserHandler =async (e) => {
        e.preventDefault();
        console.log(formik.values);
        try{
            await createUser(formik.values);
            history.push(getMainViewRoute());
        }catch(error){
            console.log(error);
        }
        //createUser(formik.values);
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

                {/* <div>
                <label htmlFor="status">Status</label>
                <input
                    type="checkbox"
                    placeholder="Yes"
                    name="status"
                    id="status"
                    value={true}
                    {...formik.getFieldProps("status")}
                />
                <input
                    type="checkbox"
                    placeholder="No"
                    name="status"
                    id="status"
                    value={false}
                    {...formik.getFieldProps("status")}
                />
                </div> */}
                <label> Active
                    <input type="checkbox" name="status" {...formik.getFieldProps("status")}/>
                </label>
                <button onClick={createUserHandler}>Create</button>
          </form>
        </div>
    )
}

export default CreateUser;