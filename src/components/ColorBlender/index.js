// == Import
import { useState } from 'react';
import MixButton from 'src/components/MixButton';
import MixedColor from 'src/components/MixedColor';
import SelectColor2 from 'src/components/SelectColor2';
import './styles.scss';

// == Composant
function ColorBlender() {
  const [color, setColor] = useState({ color1: 'color1', color2: 'color2', color3: 'color3' });
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
      <SelectColor2 handleColorClick={handleColorClick} color={color} setColor={setColor} />
      <MixButton color={color} setColor={setColor} />
      <MixedColor />
    </div>
  );
}

// == Export
export default ColorBlender;
