function Breadcrumb(props) {
  const {path} = props;
  return (
    <ul className="uk-breadcrumb">
      {path.map((step) => {
        return (
          <li className={step.disabled ? "uk-disabled" : ""}>
            <a href={step.link ? step.link : "#"}>
              {step.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
