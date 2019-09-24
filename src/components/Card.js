/**
 * Card component
 * @param {any} props
 * @constructor
 */
function Card(props) {
  const {color, title, description, content, link, linkLabel, subTitle} = props;
  return (
    <div className={"card card-bar-" + color + " block" + " phone-leader-1"}>
      <div className="card-content text-center">
        <h4>{title}</h4>
        <p className="trailer-0">
          <b>{subTitle}</b>
        </p>

        <div className="trailer-1 card-content-body">
          <b>{description}</b>
        </div>

        {(content || link) && <hr /> }

        {content &&
          <p className="trailer-0">{content}</p>
        }

        {link && linkLabel &&
          <a href={link} className="btn btn-clear btn-fill leader-1">
            {linkLabel}
          </a>
        }

      </div>
    </div>
  );
}

export default Card;
