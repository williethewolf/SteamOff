import './App.css'
import Header from './components/Header'
import Main from './components/Main'

// //OpenID steam AUTH
// import { Issuer } from 'openid-client'

// const steamIssuer = await Issuer.discover('https://steamcommunity.com/openid/')
// console.log('Discovered issuer %s %O', steamIssuer.issuer, steamIssuer.metadata)


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
