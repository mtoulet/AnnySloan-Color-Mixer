/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import SelectColor from './selectColor';

function SelectColors(
  {
    color,
    setColor,
  },
) {
  // rempli le state avec les couleurs selectionnées grace aux cliques (3 couleur max)
  const handleClickColor = (event) => {
    console.log('jentre dans le switch', event.target.style.backgroundColor);
    if (color.color1 === 'color1') {
      setColor({ color1: event.target.style.backgroundColor, color2: color.color2, color3: color.color3 });
    }
    else if (color.color2 === 'color2') {
      setColor({ color1: color.color1, color2: event.target.style.backgroundColor, color3: color.color3 });
    }
    else if (color.color3 === 'color3') {
      setColor({ color1: color.color1, color2: color.color2, color3: event.target.style.backgroundColor });
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
};

export default SelectColors;
