import './App.css'
import Head from './components/Head'
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
      <Head title ="STEAM Off" />
      <Header userProfile = {userProfile} />
      <Main setUserProfile={profileSetter}/>
    </div>
  );
}

export default App;
