import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { Cookies, useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';

export const ProtectedRoutes = () => {
 // const auth=localStorage.getItem("loggedintoken");

 const cookie=new Cookies();
 const auth=cookie.get("auth-token");
 //const auth = useSelector((state) => state.users.value);
  return auth?<Outlet />:<Navigate to={"/login"} />;

};
export const UnprotectedRoutes = () => {
  //const auth=localStorage.getItem("loggedintoken");
  //const auth = useSelector((state) => state.users.value);
  const cookie=new Cookies;
 const auth=cookie.get("auth-token");
  return auth?<Navigate to="/viewdata" />:<Outlet />
 }


