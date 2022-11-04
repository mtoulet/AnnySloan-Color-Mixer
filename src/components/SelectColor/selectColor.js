import './styles.scss';
import PropTypes from 'prop-types';
import datas from 'src/data/data';

function SelectColor(
  {
    handleColorClick,
    color,
    btnClass,
    setColor,
  },
) {
  return (
    <>
      <select
        type="select"
        defaultValue="Select a color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      >
        {datas.map((data) => (
          <option value={data.text} key={data.text} className="color-picker-item">{data.text}</option>
        ))}
      </select>
      <div className="color-picker counter">
        <input type="number" className={btnClass} onClick={(event) => handleColorClick(event)} defaultValue={0} />
      </div>
      <div className="color-picker color">
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
};

export default SelectColor;
