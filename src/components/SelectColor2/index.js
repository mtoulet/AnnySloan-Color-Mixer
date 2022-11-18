/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import SelectColor from './selectColor';

function SelectColors(
  {
    color,
    setColor,
    setColorDose,
    colorDose,
  },
) {
  // rempli le state avec les couleurs selectionnées grace aux cliques (3 couleur max)
  const handleClickColor = (event) => {
    if (color.color1 === 'color256') {
      setColor({ color1: event.target.style.backgroundColor, color2: color.color2, color3: color.color3 });
      setColorDose({ doseColor1: 1, doseColor2: colorDose.doseColor2, doseColor3: colorDose.doseColor3 });
    }
    else if (color.color2 === 'color256') {
      setColor({ color1: color.color1, color2: event.target.style.backgroundColor, color3: color.color3 });
      setColorDose({ doseColor1: colorDose.doseColor1, doseColor2: 1, doseColor3: colorDose.doseColor3 });
    }
    else if (color.color3 === 'color256') {
      setColor({ color1: color.color1, color2: color.color2, color3: event.target.style.backgroundColor });
      setColorDose({ doseColor1: colorDose.doseColor1, doseColor2: colorDose.doseColor2, doseColor3: 1 });
    }
    console.log(color);
  };
  return (
    <div className="Color-list">
      <SelectColor handleClickColor={handleClickColor} />
    </div>
  );
}
SelectColors.propTypes = {
  setColor: PropTypes.func.isRequired,
  color: PropTypes.shape({
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    color3: PropTypes.string.isRequired,
  }).isRequired,
  setColorDose: PropTypes.func.isRequired,
  colorDose: PropTypes.shape({
    doseColor1: PropTypes.number.isRequired,
    doseColor2: PropTypes.number.isRequired,
    doseColor3: PropTypes.number.isRequired,
  }).isRequired,
};

export default SelectColors;
