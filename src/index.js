import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './router.js'
import { Provider } from "mobx-react"

import userStore from "./stores/userStore"
import authStore from "./stores/authStore"

const stores = {
  userStore,
  authStore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
