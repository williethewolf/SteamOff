import Button from "./PlayButton";

const GameCardBody = ({ name, appid, playtime, last_played }) => {
    const playTimeInHours = Math.round((playtime/60)*100)/100
    const epochDate = new Date(last_played*1000);
    
    const lastPlayedHumanDate = epochDate.toLocaleString();
  return (
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <div className="card-text">Time played: {playTimeInHours}(h)</div>
      <div className="card-text">Last time played {lastPlayedHumanDate.split(',')[0]}</div>
      <Button url={appid} />
    </div>
  );
};

//export the component
export default GameCardBody;