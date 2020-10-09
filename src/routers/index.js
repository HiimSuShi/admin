import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from '../pages/views/Admin/Account';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutMain from '../pages/layouts/LayoutMain';
//Admin
import Dashboard from '../pages/views/Admin/Dashboard';
//Views
import About from '../pages/views/Main/About';
import Home from '../pages/views/Main/Home';
import AddAccount from '../pages/views/Admin/AddAccount';



const Routers = ({ accounts, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/account' exact>
                                <Account accounts={accounts} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/account/add'>
                                <AddAccount onAdd={onAdd} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router >
    )
}

Routers.propTypes = {

}

export default Routers
