import React from 'react'
import './styles/App.sass'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { renderRoutes } from 'react-router-config'
function App(props) {
  const {route} = props 
  return (
    <div className="App">
      <Header></Header>
      {renderRoutes(route.routes)}
      <Footer></Footer>
    </div>
  );
}

export default App;
