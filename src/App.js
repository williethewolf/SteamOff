import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState} from 'react'

// //OpenID steam AUTH
// import { Issuer } from 'openid-client'

// const steamIssuer = await Issuer.discover('https://steamcommunity.com/openid/')
// console.log('Discovered issuer %s %O', steamIssuer.issuer, steamIssuer.metadata)



function App() {
  const [userProfile,setUserProfile] = useState(null)

  const profileSetter = (data) => {
    setUserProfile(data)
  }

  return (
    <div className="App">
      <Header userProfile = {userProfile} />
      <Main setUserProfile={profileSetter}/>
    </div>
  );
}

export default App;
