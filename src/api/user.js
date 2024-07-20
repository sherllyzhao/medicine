import service from "../utils/request";

export function registerApi (data){
  return service({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

export function loginApi (data){
  return service({
    url: '/api/user/login',
    method: 'post',
    data
  })
}