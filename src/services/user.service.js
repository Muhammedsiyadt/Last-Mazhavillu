import config from '../config';
import axios from 'axios';
import { constants } from 'src/constants';


export const userService = {
    login,
    logout,
    customerlogout,
    Get,
    GetNoLoad,
    Post,
    Put,
    Delete,
    PostFormData
};

function login(data) {
    return axios.post(`${config.apiUrl}User/Login`, data)
        .then(res => res.data)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(constants.TOKEN_USERNAME, JSON.stringify(user));
            if (user.token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            } else {
                axios.defaults.headers.common['Authorization'] = null;
            }
            return user;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(constants.TOKEN_USERNAME);
}
function customerlogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('delcust');
}

async function Get(url, data = {}) {
    return await axios.get(`${config.apiUrl}${url}`, data)
        .then(res => res ? res.data : {})
        .then(data => {
            return data;
        });
}

async function GetNoLoad(url) {
    const user = JSON.parse(localStorage.getItem(constants.TOKEN_USERNAME));
    const headers = { 'Authorization': `Bearer ${user.token}` };
    const response = await fetch(`${config.apiUrl}${url}`, {
        method: 'GET',
        headers: headers,
    })
    const data = await response.json();
    return data;
}

async function Post(url, data) {
    return await axios.post(`${config.apiUrl}${url}`, data)
        .then(response => response ? response.data : {})
        .then(res => {
            return res;
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function Put(url, data) {
    return await axios.put(`${config.apiUrl}${url}`, data)
        .then(response => response ? response.data : {})
        .then(res => {
            return res;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function Delete(url, data) {
    return axios.delete(`${config.apiUrl}${url}`, data)
        .then(response => response ? response.data : {})
        .then(res => {
            return res;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function PostFormData(url, formdata) {
    const requestOptions = {
        headers: { 'Content-Type': 'multipart/form-data' }
    };
    return axios.post(`${config.apiUrl}${url}`, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then(res => res ? res.data : {})
        .then(res => {
            return res;
        });
}
