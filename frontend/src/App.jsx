import { useState } from 'react'

import Logsinpage from './components/Logsinpage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Todo from './components/Todo'


function App() {
  const [change,changefun]=useState(true)
  const [showtodo,todofun]=useState(true)
  const[cred,credfun]=useState(null)
  const [val ,valfun]=useState(null);
  return (
    <>{showtodo?
      (<Router><Header change={change} changefun={changefun} val={val} valfun={valfun}/>
      <Routes>
      <Route path="signup"  element={<Logsinpage change={change} changefun={changefun} credfun={credfun} cred={cred} showtodo={showtodo} todofun={todofun}  val={val} valfun={valfun}/>}  />
      <Route path="login"  element={<Logsinpage   change={change} changefun={changefun}   credfun={credfun} cred={cred}  showtodo={showtodo} todofun={todofun}  val={val} valfun={valfun}/>}  />
      <Route path="about"  element={<About   />}  />
      <Route path="home"  element={<About   />}  />
    
      
      
      </Routes>

      </Router>):<Todo credfun={credfun} cred={cred}/>}
      
          </>
  )
}


export default App
