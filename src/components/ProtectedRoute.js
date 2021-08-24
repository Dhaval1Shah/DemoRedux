import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
    const thisPath = path;
    return (
        <Route {...rest} render={
            props => {
                if (thisPath === '/contacts/add' || thisPath === '/contacts/edit/:id') {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            path: '/',
                            location: props.location
                        }
                    } />
                }
            }
            // <Component {...rest} {...props} />
        } />
    )
}

export default ProtectedRoute;