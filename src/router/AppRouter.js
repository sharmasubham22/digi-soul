import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddUser from '../components/AddUser';
import BlogList from '../components/BlogList';
import useLocalStorage from '../hooks/useLocalStorage';
import ViewBlog from '../components/ViewBlog';
import AddBlog from '../components/AddBlog';
import SecondBlog from '../components/SecondBlog';

const AppRouter = () => {
    const [users, setUsers] = useLocalStorage('users', []);
    return (
        <BrowserRouter>
        <div className="container">
            <div className="container">
            <Switch>
                <Route
                render={(props) => (
                    <BlogList {...props} users={users} setUsers={setUsers} />
                )}
                path="/"
                exact={true}
                />
                <Route
                    render={(props) => (
                        <AddUser {...props} users={users} setUsers={setUsers} />
                    )}
                    path="/add"
                />
                
                <Route
                render={(props) => (
                    <ViewBlog {...props} users={users} setUsers={setUsers} />
                )}
                path="/blog1"
                />
                <Route
                render={(props) => (
                    <SecondBlog {...props} users={users} setUsers={setUsers} />
                )}
                path="/secondblog"
                exact={true}
                />
                <Route
                render={(props) => (
                    <AddBlog {...props} users={users} setUsers={setUsers} />
                )}
                path="/addblog"
                />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;