const Button = ({ url }) => {
  return (
    <a href={`steam://rungameid/${url}`}>
        <button type="button">
          Run Game
        </button>
    </a>
  );
};

export default Button;