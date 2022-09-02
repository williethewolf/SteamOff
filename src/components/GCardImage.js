const GameCardImage = ({ img, altImg }) => {
  return <img src={img} alt="Game cover" onError={(e)=>{ if (e.target.src !== `${altImg}`) 
  { e.target.onerror = null;
    e.target.src=`${altImg}`;
    e.target.parentElement.className += " blurred";
    // e.target.parentElement.style.backgroundImage = `url('${altImg}')`;
    // e.target.parentElement.style.backgroundSize ="cover";
  }
  }}/>
};

export default GameCardImage;