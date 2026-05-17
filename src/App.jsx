import React from 'react'
import Register from './login/register'
import { DataProvider } from './login/Datacontext'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <Register />
        </DataProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
