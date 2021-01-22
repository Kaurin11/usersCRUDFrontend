import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button/button';
import { getMainViewRoute } from '../../constants/routes/routes';

const HelloComponent = () => {

    const history = useHistory();

    const mainViewHandler = () => {
        history.push(getMainViewRoute());
    }

    return(
        <div className="section-hello">
            <div className="section-hello__box" >
                <div className="section-hello__title">
                    <h1>Wellcome</h1>
                    <h3>I am glad to present you my User app</h3>
                </div>
                <Button className="section-hello__btn btn btn__hello" onClick={mainViewHandler} name={'START'} />
            </div>    
        </div>

    )
}

export default HelloComponent;