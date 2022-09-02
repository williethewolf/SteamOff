import styled from "styled-components";
import logo from '../Steam_icon_logo.webp'
import { Link } from 'react-router-dom'
import Head from '../components/Head'

const StyledAbout = styled.div`
 a{
    text-decoration: none;
    color: inherit;
  }
  .app-name{
    font-size: calc(10px + 5vmin);
  }
  .logo-container{
    margin-top: 50px;
  }

  img{
    max-width: 10vw;
    min-width:100px;
  }
  .blurb{
    margin:auto;
    font-size: calc(12px + 0.85vw);
    text-align: justify;
    max-width: 800px;
  }
  `

function About (prop){
    

    return(
        <>
        <Head title ="STEAM Off - ABOUT" />
        <StyledAbout>
        <div>ABOUT</div> 
        <Link to="/">
            <div className="logo-container">
            <img src={logo} alt="logo" className="App-logo"/>
            <div className="app-name">STEAM off</div>
           
            </div>
        </Link>
        <p><a href="https://youtu.be/QuoxprhNunM?t=108" target="_blank" rel="noreferrer">'Let off some steam, Bennett'</a></p>
        <div className="blurb">
            <p>How many times have you opened Steam, just to endlessly and aimlessly browse your library just to end up not playing anything at all because you don't have enough time left?</p>
            <p>Take the indecisiveness out of the equation. Shake up you library to come accross titles you've forgotten or didn't even know you had. Or just let STEAM off take that weight off your shoulders and pick a game for you!</p>
            <p>Kick back, input your <a href="https://steamcommunity.com/discussions/forum/1/1736588252411302797" target="_blank" rel="noreferrer">Steam Id64</a>, pick random games until you find one you like or straight up open up a surprise. </p>
            <p>It's time to let off some STEAM©!</p>
        </div>
        </StyledAbout>                
        </> 
    )

}
export default About