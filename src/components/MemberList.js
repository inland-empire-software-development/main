import PropTypes from 'prop-types';

/**
 * Renders a slider with all members in object passed in.
 * Images used should be 460x460 Square
 * @param {any} props
 * @return {*}
 * @constructor
 */
function MemberList(props) {
  const {members, warning = false, label} = props;
  return (
    <div className="container-full memberList-container">
      <div className="uk-container">
        <p className="memberlist-header heading">{label}</p>
        <div uk-slider="true">
          <ul
            className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s
            uk-child-width-1-5@m uk-grid">
            {members.map(({
              image,
              name,
              title,
            }, index) =>
              (<li key={index}>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img uk-image="true" src={
                      image ?
                        image :
                        "/static/images/desktop/placeholder.jpg"
                    } alt={name} />
                  </div>

                  <div className="uk-card-body">
                    <p className="uk-card-title">{name}</p>
                    <p className="uk-card-small">{title}</p>
                  </div>
                </div>
              </li>
              ))}
          </ul>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          {warning}
        </div>
      </div>
    </div>
  );
}

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  warning: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default MemberList;


