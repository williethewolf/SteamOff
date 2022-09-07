import styled from "styled-components";
import { Link } from 'react-router-dom'
import logo from '../Steam_icon_logo.webp'
import bennettProfile from '../assets/Commando_29.webp'
import { useEffect, useState } from "react";

//scripted styling
const StyledHeader = styled.header`
    font-size: calc(10px + 2vmin);
    background-color: #171A21;
    /* display : flex; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0 2rem;
    align-items: center;
    height: 5rem;
    color: white;
    padding-top: 6px;
  a{
    text-decoration: none;
    color: inherit;
  }
  span{
    margin: 0 50px;
  }
  img{
    margin: 0 15px;
  }
  
  .profile-cont{
    /* display: flex;
  justify-content: center; */
  text-align: right;
  span{
    font-size:calc( 1px + 2.5vmin);
    margin: 10px; 
  }
  img{
    object-fit: cover;
    object-position: center center;
    width: 50px;
    height:50px;
    max-height: 50px;
    border: 5px solid #555;
  }
  }

  .logo-cont{
    text-align: left;
  }

  .App-logo{
    height: 55px;
  pointer-events: none;
  }

  @media (min-width:768){
    justify-content: space-between;
    padding: 0 1rem;
  }
`

function Header ({userProfile}) {
  
  const [userName, setUserName] = useState(null)
  const [userAvatar, setUserAvatar] = useState(null)

  const profileLoaded = () =>{
    return ( <div className="profile-cont"><span>{userName} </span>
    <span><img src={userAvatar} className="nav-avatar" alt="User Avatar"/></span></div>)
//      return userProfile.games.map ((game) =>{
//      return ( <GameCard key={game.appid} {...game} /> )
  }

  const profileBuilder = () =>{

    console.log("updating user UI")
    setUserName(userProfile.players[0].personaname)
    setUserAvatar(userProfile.players[0].avatarmedium)

  }
  

useEffect(() => {
  if(userProfile){
      profileBuilder()  
  }else{
      console.log("No userprofile to load" )
      setUserAvatar(null)
      setUserName(null)
  }
}, [userProfile])
//  })


const noProfile = () => {
 return (<div className="profile-cont">
          <span>input <a href="https://steamcommunity.com/discussions/forum/1/1736588252411302797" target="_blank" rel="noreferrer">Steam ID64</a> to start  </span>
          <img src={bennettProfile} className="nav-avatar" alt="User Avatar"/>
        </div>)
}

    return(
    <StyledHeader>
        <Link to="/">
            <div className="logo-cont">STEAM off<img src={logo} alt="logo" className="App-logo"/></div>
        </Link>
        <div>
        <Link to="/">
        <span>HOME</span>
        </Link>
        <Link to="/about">
        <span>ABOUT</span>
        </Link>
        </div>
        <div>
        {userProfile
      ?profileLoaded()
      :noProfile()}
            
        </div>
    </StyledHeader>
    )
}

export default Header