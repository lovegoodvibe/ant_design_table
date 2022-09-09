import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./Routers/Home";
import SignIn from "./Routers/SignIn";
import Register from "./Routers/Register";
export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/signIn'>Sign in</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
  )
}
