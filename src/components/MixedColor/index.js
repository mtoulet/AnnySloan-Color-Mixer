import './styles.scss';
import PropTypes from 'prop-types';

function MixedColor(
  { colorMixer, color, colorDose },
) {
  return (
    <div className="result">
      <div className="result-color" style={{ backgroundColor: colorMixer(color, colorDose) }} />
    </div>
  );
}
MixedColor.propTypes = {
  colorMixer: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
  colorDose: PropTypes.object.isRequired,
};
export default MixedColor;
