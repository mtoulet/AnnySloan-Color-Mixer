import './styles.scss';
import PropTypes from 'prop-types';

function MixedColor(
  { color, colorDose },
) {
  const rawRgb1 = color.color1.match(/\d+/g);
  const rawRgb2 = color.color2.match(/\d+/g);
  const rawRgb3 = color.color3.match(/\d+/g);
  let red;
  let green;
  let blue;
  const totalDose = Number(colorDose.doseColor1)
   + Number(colorDose.doseColor2)
   + Number(colorDose.doseColor3);
  if (rawRgb1[0] !== '1' && rawRgb2[0] !== '2' && rawRgb3[0] !== '3') {
    console.log('on a 3 couleurs');
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
  else if (rawRgb1[0] !== '1' && rawRgb2[0] !== '2') {
    console.log('on a 2 couleurs');
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
  else if (rawRgb1[0] !== '1') {
    console.log('ntm');
    red = Math.floor(Number(rawRgb1[0]));
    green = Math.floor(Number(+rawRgb1[1]));
    blue = Math.floor(Number(rawRgb1[2]));
  }

  const result = `rgb(${red}, ${green}, ${blue})`;
  console.log(`red : ${red} green : ${green} blue : ${blue}`);
  console.log(`result final ${result}`);
  console.log(rawRgb1);
  console.log(rawRgb2);
  console.log(rawRgb3);
  return (
    <div className="result">
      <div className="result-color" style={{ backgroundColor: result }} />
    </div>
  );
}
MixedColor.propTypes = {
  color: PropTypes.object.isRequired,
  colorDose: PropTypes.object.isRequired,
};
export default MixedColor;
