import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from './routes'


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>react project</title>
      </Helmet>
      {routes}
    </BrowserRouter>
  )
  
}

export default App
