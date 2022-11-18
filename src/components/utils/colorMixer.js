const colorMixer = (color, colorDose) => {
  const rawRgb1 = color.color1.match(/\d+/g);
  const rawRgb2 = color.color2.match(/\d+/g);
  const rawRgb3 = color.color3.match(/\d+/g);
  console.log(color.color1);
  rawRgb1.push(colorDose.doseColor1);
  rawRgb2.push(colorDose.doseColor2);
  rawRgb3.push(colorDose.doseColor3);
  const rawRgbs = [rawRgb1, rawRgb2, rawRgb3];
  let red = 0;
  let green = 0;
  let blue = 0;
  const totalDose = Number(colorDose?.doseColor1)
 + Number(colorDose?.doseColor2)
 + Number(colorDose?.doseColor3);

  rawRgbs.forEach((rawRgb) => {
    // 0 = red, 1 = green, 2 = blue, 3 = dose
    if (rawRgb[0] !== '256' && rawRgb[3] !== 0) {
      red += (Number(rawRgb[0]) * rawRgb[3]);
      green += (Number(rawRgb[1]) * rawRgb[3]);
      blue += (Number(rawRgb[2]) * rawRgb[3]);
    }
  });

  const result = `rgb(${red / totalDose}, ${green / totalDose}, ${blue / totalDose})`;
  return (totalDose === 0 ? 'rgb(255, 255, 255)' : result);
};

export default colorMixer;
