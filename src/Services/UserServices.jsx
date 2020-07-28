import AxoisServices from './AxiosServices';
import axois from 'axios';


var axoisServices = new AxoisServices();

export function addUser(user) {
    return axoisServices.axiosPost(
        'http://localhost:9000/addUser',
        user,
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    );
}

export function loginUser(loginData) {
    return axoisServices.axiosPost(
        'http://localhost:9000/login',
        loginData,
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    );
}

export function getAllUser(token) {
    return axoisServices.GET(
        'users/'+token,
        {
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    );
}

export function getUser(userId,token) {
    return axoisServices.GET(
        'getUser/'+userId+'/'+token,
        {
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    );
}

export function editUser(userId,user,token) {
    return axoisServices.POST(
        'edit/'+userId+'/'+token,
        user,
        {
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            },
        }
    );
}