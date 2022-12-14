import GameCard from './GameCard'
import AllGamesList from './AllGamesList'
import styled from "styled-components";
import { useState, useEffect } from 'react';

const StyledButtonDash = styled.div`
margin-top: 3rem;
padding-top: 1rem;
background-color: #2C323B;
div:first-of-type{
    text-align: center;
    margin: auto;
    
    div{
    margin:  10px;
       
    }
}
button{
    margin:  5vw;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

Button:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

button::disabled,
button[disabled]{
    border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.vanishing-prompt{
    animation-name: vanish;
    animation-duration: 7000ms;
    animation-fill-mode: forwards;
}

@keyframes vanish{
  0%{
    opacity: 0;
    
  }

  35%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
    
  }
  100%{
    display: none;
    opacity: 0;
  }
}
`

const StyledContainer = styled.div`
    background-color: #2C323B;
    overflow: auto;
   
    .gamecase{
    margin-top:
    2rem;
    margin-bottom: 2rem;}

`

function GamesDashboard ({ games }){

    const [buttonStatus, setButtonStatus]= useState("")

    const [gameURL, setGameURL]= useState("steam://rungameid/70")

    let privateAccount = false;


    
    const userLoaded = () =>{
            if (games.games){
                privateAccountSetter(false)                
            return (<div>
                        <div className='vanishing-prompt'>Account Found.  Select option to continue. </div>
                        <button onClick={()=>setButtonStatus("Showing one")}>Show one</button><a href={gameURL}><button onClick ={()=>setButtonStatus("Random pick")}>Just Pick One for me</button></a><button onClick={()=>setButtonStatus("Showing all")}>Show all</button>
                    </div>) 
            }else{ 
                    privateAccountSetter(true)
            }
        }
/*     
    const reshuffleOnClick = () =>{
        setButtonStatus((prev) =>{

        })
        loadAll()
    } */
    const noUserLoaded = () =>{
        
        return (<div>
                    <div>Waiting for account input </div>
                    <div>
                    <button disabled>Show one</button><button disabled>Just Pick One for me</button><button disabled>Show all</button>
                    </div>
                </div>)            
    }

    const loadAll = () =>{
           return <AllGamesList games = {games} />
        }


    const randomPick = (array) =>{
        if (array){
            
        return array[Math.floor(Math.random()*array.length)]
        }else{
            console.log(privateAccount)
            console.log(games)
            return ("Account not public. Try a different one or change your privacy settings")
        }
    }

    const loadOne = () =>{
            const pick = randomPick(games.games)
            console.log(pick)
            return ( <GameCard key={pick.appid} {...pick} /> )            
        }

    const loadRandom = () =>{
        privateAccount = false
        const pick = randomPick(games.games)
            console.log(pick)
            setGameURL(`steam://rungameid/${pick.appid}`)
            console.log(gameURL)
    }

    const privateAccountSetter= (value) =>{
        privateAccount = value
        //return <div>Account not public. Try a different one or change your privacy settings</div>
    }

    // const initRandom = () =>{
    //     const pick = randomPick(games.games)
    //         console.log(pick)
    //         return `steam://rungameid/${pick.appid}`
    // }

    // const loading = () => {
    //     return( <div><h1>Type your Steam ID64...</h1></div>)
    // }

    useEffect(() => {
        if(games){
         
         if (!privateAccount){
            loadRandom()
         setButtonStatus("Showing all")}
         else{
            
         }
        }
    },[games])

    useEffect(() => {
        if(buttonStatus === "Showing all"){
            console.log(buttonStatus)
            setButtonStatus(loadAll)
        }else if(buttonStatus === "Showing one"){
            console.log(buttonStatus)
            setButtonStatus(loadOne)
        }else if(buttonStatus === "Random pick"){
            console.log(buttonStatus)
            loadRandom()
        }else{

        }    
    }, [buttonStatus])
         

    return(
        <>
        <StyledButtonDash>
        {games
            ? userLoaded()
            : noUserLoaded()
            }
        <hr/>
        </StyledButtonDash>
        <StyledContainer>
            {!privateAccount
            ?(<div className='gamecase'>
                {buttonStatus}
            </div>)
            :(<div><h1>Account not public. Try a different one or <a href ="https://asapguide.com/how-to-make-steam-profile-public/"  target="_blank" rel="noreferrer">change your privacy settings</a></h1></div>)
            }
        </StyledContainer>
        </>
    )
}

export default (GamesDashboard)