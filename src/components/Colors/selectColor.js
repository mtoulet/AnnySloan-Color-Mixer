import './styles.scss';
import PropTypes from 'prop-types';
import datas from 'src/data/data';
import ColorCounter from './colorCounter';
import Color from './color';

function SelectColor(
  {
    handleFirstColorClick,
    firstColorDose,
    handleSecondColorClick,
  },
) {
  return (
    <div className="color-picker color1">
      <select type="select" value="Select a color">
        {datas.map((data) => (
          <option value={data.text} key={data.text} className="color-picker-item">{data.text}</option>
        ))}
      </select>
      <ColorCounter handleFirstColorClick={handleFirstColorClick} firstColorDose={firstColorDose} />
      <Color />
    </div>
  );
}

SelectColor.propTypes = {
  handleFirstColorClick: PropTypes.func.isRequired,
  firstColorDose: PropTypes.number.isRequired,
};

export default SelectColor;
