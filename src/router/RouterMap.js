import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import loading from './loading'
class RouterMap extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    };
    render() {
        const RouterList = [
            {
              component: () => import('../components/Articles'),
              path: '/'
            },
            {
              component: () => import('../components/Articles'),
              path: '/articles'
            },
            {
              component: () => import('../components/Article'),
              path: '/article/:Id'
            },
            {
              component: () => import('../components/Resume/Resume'),
              path: '/resume'
            },
            {
              component: () => import('../components/Say'),
              path: '/say'
            },
            {
              component: () => import('../components/TimeFile'),
              path: '/time-file'
            },
            // {
            //   component: () => import('../components/Collect'),
            //   path: '/collect'
            // }
        ]
        return (<Router>
            <App>
              <Switch>
                {RouterList.map(item => (
                  <Route
                    key={item.path}
                    exact={true}
                    path={item.path}
                    component={Loadable({
                      loader: item.component,
                      loading
                    })}
                  />
                ))}
              </Switch>
            </App>
        </Router>)
    }
}
export default RouterMap;
 