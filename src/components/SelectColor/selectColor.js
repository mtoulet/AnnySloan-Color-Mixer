import './styles.scss';
import PropTypes from 'prop-types';
import datas from 'src/data/data.json';

function SelectColor(
  {
    handleClickColor,
    color,
  },
) {
  return (
    <div className="color-list">
      {datas.map((data) => (
        <div className={(color.color1.includes(data.value) || color.color2.includes(data.value) || color.color3.includes(data.value)) ? 'color-list-container selected' : 'color-list-container'} key={data.text} alt={data.text + data.value}>
          <div className="color-list-container__color" style={{ backgroundColor: data.value }} onClick={(event) => handleClickColor(event)} />
          <span className="color-list-container__name">{data.text}</span>
        </div>
      ))}
    </div>
  );
}

SelectColor.propTypes = {
  handleClickColor: PropTypes.func.isRequired,
  color: PropTypes.shape({
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    color3: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectColor;
