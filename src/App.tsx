import React from 'react';

//Utilities
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom' 

//My Components
import Layout from './containers/Layout';
import Home from './containers/Home';
import Login from './containers/LoginForm';

interface AppProps {
  token : boolean;
}

const App: React.FC<AppProps> = ({token}) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact path='/'
            render={
              ({location}) => 
                token ? (
                  <Home/>
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: location }
                    }}
                  />
                )
            }
          />
          <Route
            path='/login'
            component={Login}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
