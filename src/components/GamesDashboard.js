import GameCard from './GameCard'
import styled from "styled-components";

const StyledButtonDash = styled.div`
margin-top: 5rem;
padding-top: 1rem;
background-color: #2C323B;
justify-content: space-evenly;
button{
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
`

const StyledContainer = styled.div`
  
  display: grid; 
  grid-auto-rows: minmax(min-content, max-content); 
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5rem 1rem; 
  grid-template-areas: 
    ". . . ."
    ". . . ."
    ". . . ."; 
    background-color: #2C323B;
    padding: 3rem;
    position:relative;
    z-index:100

`

function GamesDashboard ({ games }){
    

    const loaded = () =>{
           
            return games.response.games.map ((game) =>{
            return ( <GameCard key={game.appid} {...game} /> )
            
        })

    }

    const loading = () => {
        return <h1>Loading Games...</h1>
    }
    return(
        <>
        <StyledButtonDash>
        <div><button>Show all</button><button>Show one</button><button>Just Pick One for me</button> </div>
        <hr/>
        </StyledButtonDash>
        <StyledContainer>
            {games
            ? loaded()
            : loading()
            }
        </StyledContainer>
        </>
    )
}

export default (GamesDashboard)