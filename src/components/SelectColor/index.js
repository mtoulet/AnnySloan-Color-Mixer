/* eslint-disable max-len */
import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import SelectColor from './selectColor';

function SelectColors(
  {
    handleColorClick,
  },
) {
  const [color1, setColor1] = useState('Select a Color');
  const [color2, setColor2] = useState('Select a Color');
  const [color3, setColor3] = useState('Select a Color');
  const [rgbColor1, setRgbColor1] = useState('rgb(185,185,185)');
  const [rgbColor2, setRgbColor2] = useState('rgb(185,185,185)');
  const [rgbColor3, setRgbColor3] = useState('rgb(185,185,185)');
  return (
    <div className="Color-list">
      <SelectColor handleColorClick={handleColorClick} btnClass="color-picker-button-colorDoser1" color={color1} setColor={setColor1} rgbColor={rgbColor1} setRgbColor={setRgbColor1} />
      <SelectColor handleColorClick={handleColorClick} btnClass="color-picker-button-colorDoser2" color={color2} setColor={setColor2} rgbColor={rgbColor2} setRgbColor={setRgbColor2} />
      <SelectColor handleColorClick={handleColorClick} btnClass="color-picker-button-colorDoser3" color={color3} setColor={setColor3} rgbColor={rgbColor3} setRgbColor={setRgbColor3} />
    </div>
  );
}

SelectColors.propTypes = {
  handleColorClick: PropTypes.func.isRequired,

};

export default SelectColors;
