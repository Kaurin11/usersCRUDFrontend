import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getCreateUserRoute , getOneUserRoute, getHelloComponentRoute, getUpdateUserRoute, getMainViewRoute  } from './constants/routes/routes';
import CreateUser from './view/createUser/createUser';
import HelloComponent from './view/helloComponent/helloComponent';
import MainView from './view/mainView/mainView';
import UpdateUser from './view/updateUser/updateUser';
import User from './view/user/user';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getHelloComponentRoute()} component={HelloComponent} />
          <Route path={getOneUserRoute()} component={User} />
          <Route path={getMainViewRoute ()} component={MainView} />
          <Route path={getCreateUserRoute ()} component={CreateUser} />
          <Route path={getUpdateUserRoute()} component={UpdateUser} />
          <Redirect to={getHelloComponentRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
