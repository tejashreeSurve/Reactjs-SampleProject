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