import styled from "styled-components";
import { Link } from 'react-router-dom'
import logo from '../Steam_icon_logo.webp'

//scripted styling
const StyledHeader = styled.header`
    font-size: calc(10px + 2vmin);
    background-color: #171A21;
    display : flex;
    /* justify-content: center; */
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    height: 5rem;
    color: white;
  a{
    text-decoration: none;
    color: inherit;
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

function Header ({props}) {
    return(
    <StyledHeader>
        <Link to="/">
            <div>STEAM off <span><img src={logo} alt="logo" className="App-logo"/></span></div>
        </Link>
        <div>
            <span>User Name</span>
            <span><img src="null" className="nav-avatar" alt="User Avatar"/></span>
        </div>
    </StyledHeader>
    )
}

export default Header