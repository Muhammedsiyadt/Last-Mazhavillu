import { constants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    customerlogout,
    SetTitle,
    Post
};

function Post(url, data) {
    return dispatch => {
        dispatch(request());
        userService.Post(url, data)
            .then(
                user => {
                    dispatch(requestFinish());
                    return user;
                },
                error => {
                    dispatch(requestFinish());
                })
    }
    function request() { return { type: constants.REQUEST, value: true } }
    function requestFinish() { return { type: constants.REQUEST, value: false } }
}


function login(data) {
    return dispatch => {
        dispatch(request());
        userService.login(data)
            .then(
                user => {
                    if (user.status) {
                        dispatch(success(user));
                        history.push('/');
                    }
                    else {
                        dispatch(failure(user.message));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                })
    }
    function request() { return { type: constants.REQUEST } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
}

function logout() {    
    userService.logout();
    window.location.href = '/admin/login';
}

function customerlogout() {    
    userService.logout();
    window.location.href = '/login';
}

function SetTitle(title) {
    return dispatch => {
        dispatch(request(title));
    }
    function request(title) { return { type: constants.SET_TITLE, value: title } }
}
