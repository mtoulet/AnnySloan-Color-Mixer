import './styles.scss';
import PropTypes from 'prop-types';

// recupere les données du stat (color) et yajoute une nouvelle valeur
// (dose) via un slder par couleur

function MixButton({ color, colorDose, setColorDose }) {
  const handleColorDoseChange = (event) => {
    if (event.target.name === 'slider1') {
      setColorDose(
        {
          doseColor1: event.target.value,
          doseColor2: colorDose.doseColor2,
          doseColor3: colorDose.doseColor3,
        },
      );
    }
    if (event.target.name === 'slider2') {
      setColorDose(
        {
          doseColor1: colorDose.doseColor1,
          doseColor2: event.target.value,
          doseColor3: colorDose.doseColor3,
        },
      );
    }
    if (event.target.name === 'slider3') {
      setColorDose(
        {
          doseColor1: colorDose.doseColor1,
          doseColor2: colorDose.doseColor2,
          doseColor3: event.target.value,
        },
      );
    }
  };
  return (
    <div className="slider-selected-container">
      <div className="slider">
        <span className="slider-selected" style={{ backgroundColor: color.color1 }} />
        <label htmlFor="slider">
          nombre de dose
          <input type="range" min="1" max="5" name="slider1" value={colorDose.doseColor1} onChange={handleColorDoseChange} />
        </label>
      </div>
      <div className="slider">
        <span className="slider-selected" style={{ backgroundColor: color.color2 }} />
        <label htmlFor="slider">
          nombre de dose
          <input type="range" min="1" max="5" name="slider2" value={colorDose.doseColor2} onChange={handleColorDoseChange} />
        </label>
      </div>
      <div className="slider">
        <span className="slider-selected" style={{ backgroundColor: color.color3 }} />
        <label htmlFor="slider">
          nombre de dose
          <input type="range" min="1" max="5" name="slider3" value={colorDose.doseColor3} onChange={handleColorDoseChange} />
        </label>
      </div>
    </div>
  );
}

MixButton.propTypes = {
  color: PropTypes.object.isRequired,
  colorDose: PropTypes.object.isRequired,
  setColorDose: PropTypes.func.isRequired,
};

export default MixButton;
