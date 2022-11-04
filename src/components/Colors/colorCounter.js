import './styles.scss';
import PropTypes from 'prop-types';

function ColorCounter({ handleCounterClick, number }) {
  return (
    <div className="color-picker counter">
      {number}
      <button className="color-picker-button" onClick={handleCounterClick} type="button">
        One more
      </button>
    </div>
  );
}

ColorCounter.propTypes = {
  handleCounterClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default ColorCounter;
