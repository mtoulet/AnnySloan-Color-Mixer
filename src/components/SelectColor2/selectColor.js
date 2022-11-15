import './styles.scss';
import PropTypes from 'prop-types';
import datas from 'src/data/data';

function SelectColor(
  {
    handleClickColor,
  },
) {
  return (
    <div className="color-list">
      {datas.map((data) => (
        <div className="color-list-container" key={data.text}>
          <div className="color-list-container__color" style={{ backgroundColor: data.value }} onClick={(event) => handleClickColor(event)} />
          <span className="color-list-container__name">{data.text}</span>
        </div>
      ))}
    </div>
  );
}

SelectColor.propTypes = {
  handleClickColor: PropTypes.func.isRequired,
};

export default SelectColor;
