import { useState} from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

function Main ( {setUserProfile} ){

    const [idFromForm, setIdFromForm] = useState (null)
    return(
        <Routes>
            {/* Just to appease githubpages */}
            <Route
                path='/SteamOff'
                element = {<Home 
                                userID={idFromForm} 
                                setUserID={setIdFromForm}
                                setUserProfile={setUserProfile}
                            />}
            />
            {/* delete when not using github pages */}
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