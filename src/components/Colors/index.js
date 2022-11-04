import './styles.scss';
import PropTypes from 'prop-types';
import SelectColor from './selectColor';

function Colors(
  {
    handleFirstColorClick,
    firstColorDose,
    handleSecondColorClick,
    secondColorDose,
    handleThirdColorClick,
    thirdColorDose,
  },
) {
  console.log('on passe par colors');
  return (
    <div className="Color-list">
      <SelectColor handleFirstColorClick={handleFirstColorClick} firstColorDose={firstColorDose} />
      <SelectColor handleSecondColorClick={handleSecondColorClick} secondColorDose={secondColorDose} />
      <SelectColor handleThirdColorClick={handleThirdColorClick} thirdColorDose={thirdColorDose} />
    </div>
  );
}

Colors.propTypes = {
  handleFirstColorClick: PropTypes.func.isRequired,
  firstColorDose: PropTypes.number.isRequired,
  handleSecondColorClick: PropTypes.func.isRequired,
  secondColorDose: PropTypes.number.isRequired,
  handleThirdColorClick: PropTypes.func.isRequired,
  thirdColorDose: PropTypes.number.isRequired,
};

export default Colors;
