/**
 * Button component
 * @param {any} props
 * @constructor
 */
function Button(props) {
  const {
    link = "#",
    label,
    target = "_self",
    classes = "",
    toggle = "false",
    border = "border-red",
    borderSize = "1",
    type = "button",
    color = "bg-red",
    text = "white",
    width = 0,
  } = props;

  const opts = {target};

  if (toggle) {
    opts["uk-toggle"] = toggle;
  }

  const widths = ["small", "third", "half", "full"];

  return (
    // TODO: make it so internal links use Link component
    <a className={`${type} ${color} ${text} button-${widths[width]}
      ${border} border-size-${borderSize} hvr-ripple-out
      ${classes}`}
    {...opts}
    href={link}
    >
      {label}
    </a>
  );
}

export default Button;
