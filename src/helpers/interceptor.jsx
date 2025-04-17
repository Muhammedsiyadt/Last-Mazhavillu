import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { constants } from '../constants'
import axios from "axios";
import { userActions } from '../actions'
import { useNavigate, Link } from 'react-router-dom';


const Interceptor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addAuthInterceptor = () => {
    axios.interceptors.request.use(
      config => {
        dispatch({ type: constants.REQUEST, value: true });
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  };

  const addErrorInterceptor = () => {
    axios.interceptors.response.use(
      response => {
        if (response.data?.systemMessage) {
          console.log('System Error: ', response.data?.systemMessage);
        }
        dispatch({ type: constants.REQUEST, value: false });
        return response;
      },
      error => {
        if (error.response) {
          const code = error.response.status;
          dispatch({ type: constants.REQUEST, value: false });
          const currentPath = window.location.pathname;
          //return error;
          if (code === 401) {
            debugger
            if (currentPath.startsWith('/admin')) {
              userActions.logout();
            } else {
              userActions.customerlogout();
            }
          }
          else if (code === 403) {
            if (currentPath.startsWith('/admin')) {
              navigate('/admin/unauthorize', { replace: true });
            } else {
              navigate('/unauthorize', { replace: true });
            }
          }
        }
        //return Promise.reject(error);
      }
    );
  };

  useEffect(addAuthInterceptor, []);
  useEffect(addErrorInterceptor, []);

  return (<></>);
}

export default Interceptor;
