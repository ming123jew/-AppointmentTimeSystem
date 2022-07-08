import logo from './logo.svg'
import './App.css'
import HomeRoutes from './router/home'
import MemberRoutes from './router/member'

import { BrowserRouter, Routes, Route, Link, Navigate, AuthRoute } from 'react-router-dom'
import React from 'react';



//路由配置文件
const AppRoutes =  () => {

  const myROutes = (item,index) => {
    let childs = []
    console.log(item.hasOwnProperty('childs'));
    if(item.hasOwnProperty('childs')){
      childs = item.childs
    }
    return (
      <>
      <Route key={index} path={item.path} exact={item.exact} element={<AuthRoute>item.element</AuthRoute>}></Route>
      {childs.map((child_item,child_index) => {
        return <Route key={child_index} path={child_item.path} exact={child_item.exact} element={<AuthRoute>child_item.element</AuthRoute>}></Route>
      })}
      </>
    )
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/404" element={<div>Page Not Found</div>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          {HomeRoutes.map((item, index) => {
            return myROutes(item, index)
          })}

          {MemberRoutes.map((item, index) => {
            return myROutes(item, index)
          })}

        </Routes>
      </BrowserRouter>
    </>
  )



  
}
export default AppRoutes
