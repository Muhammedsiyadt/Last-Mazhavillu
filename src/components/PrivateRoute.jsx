import React from 'react';
import { Navigate } from 'react-router-dom'
import { constants } from "src/constants";
//import routeConfig from 'src/routes';

function PrivateRoute({ logedIn, isAdmin, children }) {
    if (!isAdmin) {
        // if (!localStorage.getItem('goldcustomer')) {
        //     return <Navigate to="/login" replace />
        // }
        return children;
    }
    else if (isAdmin) {
        // if (!localStorage.getItem(constants.TOKEN_USERNAME)) {
        //     return <Navigate to="/login" replace />
        // }
    }
    return children
}

export default PrivateRoute;
