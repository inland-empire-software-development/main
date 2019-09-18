/**
 * Card component
 * @param {any} props
 * @constructor
 */
function Card(props) {
  const {color, title, description, content, link, linkLabel} = props;
  return (
    <div className={"card card-bar-" + color + " block"}>
      <div className="card-content text-center">
        <h4>{title}</h4>
        <p className="font-size--3 text-darker-gray trailer-0">
          <b>{description}</b>
        </p>

        <hr />
        <p className="trailer-0">{content}</p>
        <a href={link} className="btn btn-clear btn-fill leader-1">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}

export default Card;
