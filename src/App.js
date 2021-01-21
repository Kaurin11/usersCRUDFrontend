import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getCreateUserUrl, getOneUserUrl, getStartUrl, getUpdateUserRoute, getUsersPageUrl } from './constants/routes/routes';
import CreatePage from './view/createPage/createPage';
import FirstPage from './view/firstPage/firstPage';
import SecPage from './view/secPage/secPage';
import UpdatePage from './view/updatePage/updatePage';
import User from './view/user/user';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getOneUserUrl()} component={User} />
          <Route path={getStartUrl()} component={FirstPage} />
          <Route path={getUsersPageUrl()} component={SecPage} />
          <Route path={getCreateUserUrl()} component={CreatePage} />
          <Route path={getUpdateUserRoute()} component={UpdatePage} />
          <Redirect to={getStartUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
