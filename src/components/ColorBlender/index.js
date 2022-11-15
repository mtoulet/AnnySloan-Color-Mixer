// == Import
import { useState } from 'react';
import MixButton from 'src/components/MixButton';
import MixedColor from 'src/components/MixedColor';
import SelectColor2 from 'src/components/SelectColor2';
import './styles.scss';

// == Composant
function ColorBlender() {
  const [color, setColor] = useState({ color1: 'color1', color2: 'color2', color3: 'color3' });
  const [colorDose, setColorDose] = useState({ doseColor1: 1, doseColor2: 1, doseColor3: 1 });

  return (
    <div className="ColorBlender">
      <SelectColor2 color={color} setColor={setColor} />
      <MixButton
        color={color}
        setColor={setColor}
        colorDose={colorDose}
        setColorDose={setColorDose}
      />
      <MixedColor color={color} colorDose={colorDose} />
    </div>
  );
}

// == Export
export default ColorBlender;
