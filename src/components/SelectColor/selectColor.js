import './styles.scss';
import PropTypes from 'prop-types';
import datas from 'src/data/data';

function SelectColor(
  {
    handleColorClick,
    color,
    btnClass,
    setColor,
    setRgbColor,
    rgbColor,
  },
) {
  const style = {
    backgroundColor: rgbColor,
  };
  return (
    <>
      <select
        type="select"
        defaultValue="Select a color"
        onChange={(event) => {
          setColor(event.target.value);
          const rgbText = datas.find((data) => data.text === event.target.value);
          setRgbColor(rgbText.value);
        }}
      >
        {datas.map((data) => (
          <option value={data.text} key={data.text} className="color-picker-item">{data.text}</option>
        ))}
      </select>
      <div className="color-picker counter">
        <input type="number" className={btnClass} onClick={(event) => handleColorClick(event)} defaultValue={0} />
      </div>
      <div className="color-picker color" style={style}>
        {color !== 'Select a Color' && <p>{color}</p>}
      </div>
    </>
  );
}

SelectColor.propTypes = {
  handleColorClick: PropTypes.func.isRequired,
  btnClass: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  setRgbColor: PropTypes.func.isRequired,
  rgbColor: PropTypes.string.isRequired,
};

export default SelectColor;
