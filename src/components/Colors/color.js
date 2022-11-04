import './styles.scss';
import PropTypes from 'prop-types';

function Color({ color }) {
  return (
    <div className="color-picker color">
      <p>{color}</p>
    </div>
  );
}
Color.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;
