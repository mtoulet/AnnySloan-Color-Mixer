const colorMixer = (color, colorDose) => {
  const rawRgb1 = color.color1.match(/\d+/g);
  const rawRgb2 = color.color2.match(/\d+/g);
  const rawRgb3 = color.color3.match(/\d+/g);
  let red;
  let green;
  let blue;
  const totalDose = Number(colorDose?.doseColor1)
 + Number(colorDose?.doseColor2)
 + Number(colorDose?.doseColor3);
  if (totalDose === 0) {
    red = 255;
    green = 255;
    blue = 255;
  }
  else if (rawRgb1[0] !== '256' && rawRgb2[0] !== '256' && rawRgb3[0] !== '256') {
    red = Math.floor((
      (Number(rawRgb1[0]) * colorDose.doseColor1)
  + (Number(rawRgb2[0]) * colorDose.doseColor2)
  + Number(+rawRgb3[0] * colorDose.doseColor3)) / totalDose);
    green = Math.floor((
      (Number(+rawRgb1[1]) * colorDose.doseColor1)
  + Number(+rawRgb2[1] * colorDose.doseColor2)
  + Number(+rawRgb3[1] * colorDose.doseColor3)) / totalDose);
    blue = Math.floor((
      (Number(rawRgb1[2]) * colorDose.doseColor1)
  + Number(+rawRgb2[2] * colorDose.doseColor2)
  + Number(+rawRgb3[2] * colorDose.doseColor3)) / totalDose);
  }
  else if ((rawRgb1[0] !== '256' && rawRgb2[0] !== '256') || (rawRgb1[0] !== '256' && rawRgb3[0] !== '256') || (rawRgb2[0] !== '256' && rawRgb3[0] !== '256')) {
    red = Math.floor((
      (Number(rawRgb1[0]) * colorDose.doseColor1)
  + (Number(rawRgb2[0]) * colorDose.doseColor2)) / totalDose);
    green = Math.floor((
      (Number(+rawRgb1[1]) * colorDose.doseColor1)
  + Number(+rawRgb2[1] * colorDose.doseColor2)) / totalDose);
    blue = Math.floor((
      (Number(rawRgb1[2]) * colorDose.doseColor1)
  + Number(+rawRgb2[2] * colorDose.doseColor2)) / totalDose);
  }
  else if (rawRgb1[0] !== '256' || rawRgb2 !== '256' || rawRgb3 !== '256') {
    red = Math.floor(Number(rawRgb1[0]));
    green = Math.floor(Number(+rawRgb1[1]));
    blue = Math.floor(Number(rawRgb1[2]));
  }

  const result = `rgb(${red}, ${green}, ${blue})`;
  return (result);
};

export default colorMixer;
