import React from 'react';
import { useHistory } from 'react-router';
import { getUsersPageUrl } from '../../constants/routes/routes';

const FirstPage = () => {

    const history = useHistory();

    const secPageHandler = () => {
        history.push(getUsersPageUrl());
    }

    return(
        <div>
            first Page
            <button onClick={secPageHandler} >Start</button>
        </div>
    )
}

export default FirstPage;