import './styles.scss';
import PropTypes from 'prop-types';

const testcolor = 'rgb(48,71,79)';

function MixedColor(
  { color },
) {
  const style = {
    backgroundColor: testcolor,
  };
  return (
    <div className="color-picker color" style={style}>
      {color !== 'Select a Color' && <p>{color}</p>}
    </div>
  );
}
MixedColor.propTypes = {
  color: PropTypes.string.isRequired,
};
export default MixedColor;
