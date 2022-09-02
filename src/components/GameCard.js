import GameCardBody from './GCardBody'
import GameCardImage from './GCardImage'
import styled from "styled-components";
import missingCover from '../MissingCover.webp'

const StyledCard = styled.div`
  width: "18rem";
  display: block;
  .card-body{
    display: block;
    position:relative;
    z-index:97
    
  }

  img {
    box-shadow: 5px 5px 0px black;
      -moz-box-shadow: 10px 10px 5px black;
      -webkit-box-shadow: 3px 6px 10px black;
      -khtml-box-shadow: 10px 10px 5px ;
      position:relative;
    z-index:91;
    max-width: 80%;
  }

  /* .blurred {
  position: relative;
width: 200px;
height: 100px;
filter: blur(8px);
-webkit-filter: blur(8px);

}


.blurred::before {
position: absolute;
content: '';
z-index: -1;
width: 200px;
height: 50px;
background-size: cover;
/* background-image: url(image.jpg); */
img{
    box-shadow: 5px 5px 0px black;
      -moz-box-shadow: 10px 10px 5px black;
      -webkit-box-shadow: 3px 6px 10px black;
      -khtml-box-shadow: 10px 10px 5px ;
      position:relative;
    z-index:91;
    max-width: 80%;
}

/* 
.blurred::after{
    background-size: cover;
} */


  Button {
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
  position:absolute;
    z-index:95;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  right:50%;
  transform: translate(50%, 0);
    bottom:115px;
  }

Button:active {
  box-shadow: 0px 0px 0px 0px;
  right: 49%;
  bottom: 110px;
  
}

@media (min-width: 768px) {
  Button {
    padding: 0.25em 0.75em;
  }
}

h2{
    height: 2em
}
`

const GameCard = ({name, appid, playtime_forever, rtime_last_played}) => {
    let img =`https://steamcdn-a.akamaihd.net/steam/apps/${appid}/library_600x900.jpg`
//     const oGImg= `https://steamcdn-a.akamaihd.net/steam/apps/${appid}/library_600x900.jpg`
    const altImg = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`

//     async function checkImage(url){
     
//         const res = await fetch(url);
//         const buff = await res.blob();
       
//         return buff.type.startsWith('image/')
   
//    }
//    if (checkImage(oGImg)){ img = oGImg}
//    else{
//     if (checkImage(subImg)){
//         img = subImg
//     } else{
//         img = missingCover
//     }
//    }
    
    return(
        <StyledCard>
            <div>
            <GameCardImage  img={img} altImg={altImg} />
            </div>
            <GameCardBody
                name = {name}
                appid = {appid}
                playtime = {playtime_forever}
                last_played = {rtime_last_played}
            />
        </StyledCard>
    )
}

export default GameCard