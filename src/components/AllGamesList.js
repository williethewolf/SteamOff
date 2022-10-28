import GameCard from './GameCard'
import styled from "styled-components";

const StyledAllGamesContainer = styled.div`

   flex-wrap: wrap;
  display: grid; 
  grid-auto-rows: minmax(min-content, max-content); 
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 800px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const AllGamesList = ({games}) =>{

    const loadAll = () =>{
        console.log(games.games)
         return (shuffle(games.games).map ((game) =>{
         return ( <GameCard key={game.appid} {...game} /> )            
     }))
 }
 return (
    <StyledAllGamesContainer>
    {loadAll()}
    </StyledAllGamesContainer>

 )
}

export default AllGamesList