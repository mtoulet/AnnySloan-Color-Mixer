// == Import
import { useState } from 'react';
import SelectColor from 'src/components/SelectColor';
import MixButton from 'src/components/MixButton';
import MixedColor from 'src/components/MixedColor';
import './styles.scss';

// == Composant
function ColorBlender() {
  const [firstColorDose, setFirstColorDose] = useState(0);
  const [secondColorDose, setSecondColorDose] = useState(0);
  const [thirdColorDose, setThirdColorDose] = useState(0);

  const handleColorClick = (event) => {
    switch (event.target.className) {
      case 'color-picker-button-colorDoser1':
        setFirstColorDose(firstColorDose + 1);
        break;
      case 'color-picker-button-colorDoser2':
        setSecondColorDose(secondColorDose + 1);
        break;
      case 'color-picker-button-colorDoser3':
        setThirdColorDose(thirdColorDose + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="ColorBlender">
      <SelectColor
        handleColorClick={handleColorClick}
      />
      <MixButton />
      <MixedColor />
    </div>
  );
}

// == Export
export default ColorBlender;
