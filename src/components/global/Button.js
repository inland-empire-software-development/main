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
    toggle = false,
    border = "border-red",
    borderSize = "1",
    type = "button",
    color = "bg-red",
    text = "white",
    width = 0,
  } = props;

  const widths = ["small", "third", "half", "full"];

  return (
    <a href={link}
      target="_blank"
      className={`${type} ${color} ${text} button-${widths[width]}
      ${border} border-size-${borderSize} hvr-ripple-out
      ${classes}`}
      uk-toggle={toggle}
    >
      {label}
    </a>
  );
}

export default Button;
