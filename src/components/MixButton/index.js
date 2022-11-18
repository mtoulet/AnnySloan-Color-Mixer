import './styles.scss';
import PropTypes from 'prop-types';
import deleteColor from 'src/assets/icons/delete.png';
import { useRef } from 'react';

// recupere les données du stat (color) et yajoute une nouvelle valeur
// (dose) via un slder par couleur

function MixButton(
  {
    color,
    colorDose,
    setColorDose,
    setColor,
    colorMixer,
  },
) {
  const color1 = useRef();
  const color2 = useRef();
  const color3 = useRef();
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
  const handleDeleteColor = (event) => {
    console.log('je rentre dans le if');
    console.log(event.target);
    if (event.target.name === 'delete1') {
      color1.current.style.backgroundColor = 'white';
      setColor({ color1: 'color256', color2: color.color2, color3: color.color3 });
      setColorDose({
        doseColor1: 0,
        doseColor2: colorDose.doseColor2,
        doseColor3: colorDose.doseColor3,
      });
      colorMixer(color, colorDose);
    }
    if (event.target.name === 'delete2') {
      color2.current.style.backgroundColor = 'white';
      setColor({ color1: color.color1, color2: 'color256', color3: color.color3 });
      setColorDose({
        doseColor1: colorDose.doseColor1,
        doseColor2: 0,
        doseColor3: colorDose.doseColor3,
      });
      colorMixer(color, colorDose);
    }
    if (event.target.name === 'delete3') {
      color3.current.style.backgroundColor = 'white';
      setColor({ color1: color.color1, color2: color.color2, color3: 'color256' });
      setColorDose({
        doseColor1: colorDose.doseColor1,
        doseColor2: colorDose.doseColor2,
        doseColor3: 0,
      });
      colorMixer(color, colorDose);
    }
    console.log(color1);
  };
  return (
    <div className="slider-selected-container">
      {color.color1 !== 'color256' && (
      <div className="slider">
        <img className="slider-delete" src={deleteColor} alt="supprimer la couleur" title="supprimer la couleur" name="delete1" onClick={(event) => handleDeleteColor(event)} />
        <span className="slider-selected" ref={color1} style={{ backgroundColor: color.color1 }} />
        <label htmlFor="slider">
          nombre de dose {colorDose.doseColor1}
          <input type="range" min="0" max="5" name="slider1" value={colorDose.doseColor1} onChange={handleColorDoseChange} />
        </label>
      </div>
      )}
      {color.color2 !== 'color256' && (
      <div className="slider">
        <img className="slider-delete" src={deleteColor} alt="supprimer la couleur" title="supprimer la couleur" name="delete2" onClick={(event) => handleDeleteColor(event)} />
        <span className="slider-selected" ref={color2} style={{ backgroundColor: color.color2 }} />
        <label htmlFor="slider">
          nombre de dose {colorDose.doseColor2}
          <input type="range" min="0" max="5" name="slider2" value={colorDose.doseColor2} onChange={handleColorDoseChange} />
        </label>
      </div>
      )}
      {color.color3 !== 'color256' && (
      <div className="slider">
        <img className="slider-delete" src={deleteColor} alt="supprimer la couleur" title="supprimer la couleur" name="delete3" onClick={(event) => handleDeleteColor(event)} />
        <span className="slider-selected" ref={color3} style={{ backgroundColor: color.color3 }} />
        <label htmlFor="slider">
          nombre de dose {colorDose.doseColor3}
          <input type="range" min="0" max="5" name="slider3" value={colorDose.doseColor3} onChange={handleColorDoseChange} />
        </label>
      </div>
      )}
    </div>
  );
}

MixButton.propTypes = {
  color: PropTypes.object.isRequired,
  colorDose: PropTypes.object.isRequired,
  setColorDose: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
  colorMixer: PropTypes.func.isRequired,
};

export default MixButton;
