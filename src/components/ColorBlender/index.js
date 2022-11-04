// == Import
import { useState } from 'react';
import SelectColor from 'src/components/Colors';
import MixButton from 'src/components/MixButton';
import MixedColor from 'src/components/MixedColor';
import './styles.scss';

// == Composant
function ColorBlender() {
  const [firstColorDose, setFirstColorDose] = useState(0);
  const [secondColorDose, setSecondColorDose] = useState(0);
  const [thirdColorDose, setThirdColorDose] = useState(0);
  const ColorDose = [firstColorDose, secondColorDose, thirdColorDose];
  console.log(ColorDose);
  console.log(`1:${firstColorDose} 2:${secondColorDose} 3:${thirdColorDose}`);
  const handleFirstColorClick = () => (
    setFirstColorDose(firstColorDose + 1)
  );

  const handleSecondColorClick = () => (
    setSecondColorDose(secondColorDose + 1)
  );

  const handleThirdColorClick = () => (
    setThirdColorDose(thirdColorDose + 1)
  );

  return (
    <div className="ColorBlender">
      <SelectColor
        handleFirstColorClick={handleFirstColorClick}
        firstColorDose={firstColorDose}
        handleSecondColorClick={handleSecondColorClick}
        secondColorDose={secondColorDose}
        handleThirdColorClick={handleThirdColorClick}
        thirdColorDose={thirdColorDose}
      />
      <MixButton />
      <MixedColor />
    </div>
  );
}

// == Export
export default ColorBlender;
