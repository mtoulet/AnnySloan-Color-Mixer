const colorMixer = (color, colorDose) => {
  const rawRgb1 = color.color1.match(/\d+/g);
  const rawRgb2 = color.color2.match(/\d+/g);
  const rawRgb3 = color.color3.match(/\d+/g);
  rawRgb1.push(colorDose?.doseColor1);
  rawRgb2.push(colorDose?.doseColor2);
  rawRgb3.push(colorDose?.doseColor3);
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
  // else if (rawRgb1[0] !== '256' && rawRgb2[0] !== '256' && rawRgb3[0] !== '256') {
  //   red = Math.floor((
  //     (Number(rawRgb1[0]) * colorDose.doseColor1)
  // + (Number(rawRgb2[0]) * colorDose.doseColor2)
  // + Number(+rawRgb3[0] * colorDose.doseColor3)) / totalDose);
  //   green = Math.floor((
  //     (Number(+rawRgb1[1]) * colorDose.doseColor1)
  // + Number(+rawRgb2[1] * colorDose.doseColor2)
  // + Number(+rawRgb3[1] * colorDose.doseColor3)) / totalDose);
  //   blue = Math.floor((
  //     (Number(rawRgb1[2]) * colorDose.doseColor1)
  // + Number(+rawRgb2[2] * colorDose.doseColor2)
  // + Number(+rawRgb3[2] * colorDose.doseColor3)) / totalDose);
  // }
  // else if ((rawRgb1[0] !== '256' && rawRgb2[0] !
  // == '256') || (rawRgb1[0] !== '256' && rawRgb3[0] !
  // == '256') || (rawRgb2[0] !== '256' && rawRgb3[0] !== '256')) {
  //   red = Math.floor((
  //     (Number(rawRgb1[0]) * colorDose.doseColor1)
  // + (Number(rawRgb2[0]) * colorDose.doseColor2)) / totalDose);
  //   green = Math.floor((
  //     (Number(+rawRgb1[1]) * colorDose.doseColor1)
  // + Number(+rawRgb2[1] * colorDose.doseColor2)) / totalDose);
  //   blue = Math.floor((
  //     (Number(rawRgb1[2]) * colorDose.doseColor1)
  // + Number(+rawRgb2[2] * colorDose.doseColor2)) / totalDose);
  // }
  // else if (rawRgb1[0] !== '256' || rawRgb2 !== '256' || rawRgb3 !== '256') {
  //   red = Math.floor(Number(rawRgb1[0]));
  //   green = Math.floor(Number(+rawRgb1[1]));
  //   blue = Math.floor(Number(rawRgb1[2]));
  // }

  const result = `rgb(${red / totalDose}, ${green / totalDose}, ${blue / totalDose})`;
  return (totalDose === 0 ? 'rgb(255, 255, 255)' : result);
};

export default colorMixer;
