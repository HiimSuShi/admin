import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutMain from '../pages/layouts/LayoutMain';
//Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import AddAccount from '../pages/views/Admin/AddAccount';
import Account from '../pages/views/Admin/Account';
import EditAccount from '../pages/views/Admin/EditAccount.js';
import Categories from '../pages/views/Admin/Categories';


//Views
import About from '../pages/views/Main/About';
import Home from '../pages/views/Main/Home';
import AddCategories from '../pages/views/Admin/AddCategories';
import News from '../pages/views/Admin/News';




const Routers = ({ dataRole, allData, onRemove, onHandleSubmit, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path='/admin'>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/account/add'>
                                <AddAccount onAdd={onAdd} dataRole={dataRole} exact />
                            </Route>
                            <Route path='/admin/account/update/:id' >
                                <EditAccount onUpdate={onUpdate} />
                            </Route>
                            <Route path='/admin/account'  >
                                <Account allData={allData} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/categories/add'>
                                <AddCategories />
                            </Route>
                            <Route path='/admin/categories'>
                                <Categories allData={allData} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/news'>
                                <News />
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
