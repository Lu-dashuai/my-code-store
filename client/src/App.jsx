import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import routers from './routes'
import './App.less'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          {routers.map(r => (
            <li key={r.path}>
              <Link to={r.path}>{r.name || r.path.slice(1)}</Link>
            </li>
          ))}
        </ul>

        {routers.map(r => (
          <Route {...r} key={r.path} />
        ))}
      </BrowserRouter>
    </div>
  )
}

export default App
