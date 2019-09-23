/**
 * Button component
 * @param {any} props
 * @constructor
 */
function Button(props) {
  const {
    link,
    label,
    classes = "",
    border = "border-red",
    borderSize = "1",
    type = "button",
    color = "bg-red",
    text = "white",
    size = "0",
    width = 0,
  } = props;

  const widths = ["small", "third", "half", "full"];

  return (
    <a href={link}
      target="_blank"
      className={`${type} ${color} ${text} button-${widths[width]} 
      font-size-${size} ${border} border-size-${borderSize} hvr-ripple-out 
      ${classes}`}>
      {label}
    </a>
  );
}

export default Button;
