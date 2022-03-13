import {create} from 'apisauce';
import {AuthService} from '../services/auth';
import {DasbhoardService} from '../services/dashboard';
// const baseInstance = create({
//   baseURL: 'abc.com',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
//   },
// });

const httpInstance = create({baseURL: 'https://randomuser.me/api/'});

AuthService.httpInstance = httpInstance;
DasbhoardService.httpInstance = httpInstance;

export {httpInstance};
