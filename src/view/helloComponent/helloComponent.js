import React from 'react';
import { useHistory } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';

const HelloComponent = () => {

    const history = useHistory();

    const mainViewHandler = () => {
        history.push(getMainViewRoute());
    }

    return(
        <div>
            first Page
            <button onClick={mainViewHandler} >Start</button>
        </div>
    )
}

export default HelloComponent;