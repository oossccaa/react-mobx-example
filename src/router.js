import React from 'react'
import { Redirect } from 'react-router-dom'
import App from './App'
import Login from './views/Login'

export const routes = [
  {
    component: App,
    path: '/',
    routes: [
      {
        name: '登入',
        component: Login,
        path: '/login',
        exact: true,
      },
      {
        path: '/',
        component: () => <Redirect to="/login" />,
      },
    ]
  }
]