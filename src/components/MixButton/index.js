import './styles.scss';
import PropTypes from 'prop-types';

// recupere les données du stat (color) et yajoute une nouvelle valeur
// (dose) via un slder par couleur

function MixButton({ color }) {
  return (
    <div className="slider-selected-container">
      <span className="slider-selected" style={{ backgroundColor: color.color1 }} />
      <span className="slider-selected" style={{ backgroundColor: color.color2 }} />
      <span className="slider-selected" style={{ backgroundColor: color.color3 }} />
    </div>
  );
}

MixButton.propTypes = {
  color: PropTypes.object.isRequired,
};

export default MixButton;
