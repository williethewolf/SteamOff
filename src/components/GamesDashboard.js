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

  margin-top:2rem;

`

function GamesDashboard ({ games }){

    const [buttonStatus, setButtonStatus]= useState("")


    
    const userLoaded = () =>{
            /* setButtonStatus("all") */
            return (<div>
                        <div className='vanishing-prompt'>Account Found</div>
                        <button onClick={()=>setButtonStatus("Showing one")}>Show one</button><button onClick ={()=>setButtonStatus("Random pick")}>Just Pick One for me</button><button onClick={()=>setButtonStatus("Showing all")}>Show all</button>
                    </div>)            
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
        return array[Math.floor(Math.random()*array.length)]
    }

    const loadOne = () =>{
            const pick = randomPick(games.games)
            console.log(pick)
            return ( <GameCard key={pick.appid} {...pick} /> )            
        }

    const loadRandom = () =>{

    }

    const loading = () => {
        return( <div><h1>Type your Steam ID64...</h1></div>)
    }

    useEffect(() => {
        if(buttonStatus == "Showing all"){
            console.log(buttonStatus)
            setButtonStatus(loadAll)
        }else if(buttonStatus == "Showing one"){
            console.log(buttonStatus)
            setButtonStatus(loadOne)
        }else if(buttonStatus == "Random pick"){
            console.log(buttonStatus)
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
        {buttonStatus}    
        </StyledContainer>
        </>
    )
}

export default (GamesDashboard)