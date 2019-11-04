import Link from "next/link";

/**
 * This takes in an array path, considers each item a step.
 * @param {any} props
 * @return {*}
 * @constructor
 */
function Breadcrumb(props) {
  const {path} = props;
  return (
    <ul className="uk-breadcrumb">
      {path.map((step, index) => {
        return (
          <li key={index} className={step.disabled ? "uk-disabled" : ""}>
            <Link href={step.link ? step.link : "#"}>
              <a>
                {step.label}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
