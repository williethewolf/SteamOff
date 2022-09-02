import { useState} from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

function Main ( {setUserProfile} ){

    const [idFromForm, setIdFromForm] = useState (null)
    const userID = undefined
    return(
        <Routes>
            <Route
                path='/'
                element = {<Home 
                                userID={idFromForm} 
                                setUserID={setIdFromForm}
                                setUserProfile={setUserProfile}
                            />}
            />
            <Route
                path='/about'
                element = {<About />}
            />
        
        </Routes>
    )

}
export default Main