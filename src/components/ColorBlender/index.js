// == Import

import { useState } from 'react';
import MixButton from 'src/components/MixButton';
import MixedColor from 'src/components/MixedColor';
import colorMixer from 'src/components/utils/colorMixer';
import SelectColors from '../SelectColor';
import './styles.scss';

// == Composant
function ColorBlender() {
  const [color, setColor] = useState({ color1: 'color256', color2: 'color256', color3: 'color256' });
  const [colorDose, setColorDose] = useState({ doseColor1: 0, doseColor2: 0, doseColor3: 0 });
  return (
    <div className="ColorBlender">
      <SelectColors
        color={color}
        setColor={setColor}
        colorDose={colorDose}
        setColorDose={setColorDose}
      />
      <MixButton
        color={color}
        setColor={setColor}
        colorDose={colorDose}
        setColorDose={setColorDose}
        colorMixer={colorMixer}
      />
      <MixedColor color={color} colorDose={colorDose} colorMixer={colorMixer} />
    </div>
  );
}

export default ColorBlender;
