import IDForm from "../components/IDinputForm"
import GamesDashboard from "../components/GamesDashboard"
import { useEffect, useState, useRef } from 'react'

function Home ({userID, setUserID}){
    const [games, setGames] = useState(null)

    const API_URL = "http://localhost:4000/api/users/"

    const getGamesRef = useRef(null)

    const getGames = async() => {
        try{
            const response = await fetch (API_URL+userID.ID64, {})
            const data = await response.json()
            setGames(JSON.parse(data))
        } catch (error){

        }
    }
    useEffect(() => {
        getGamesRef.current = getGames
    })
    
    useEffect(() => {
        if(userID){
            console.log("getting games")
            getGamesRef.current()
        }else{
            console.log("No user ID")
            setGames(null)
        }
    }, [userID])
    // userID?
    // const


    return(      
        <>
            <div>HOME</div>
            <IDForm 
                userID={userID}
                setUserID = {setUserID}
            />
            <GamesDashboard games={games} />
        </>
    )

}
export default Home