import { useDispatch } from 'react-redux';
import css from './Input.module.css';
import PropTypes from 'prop-types';
import { setStatusFilter } from 'components/redux/phonebook/actions';

const Input = () => {
  const dispatch = useDispatch();
  const searchItem = input => {
    dispatch(setStatusFilter(input));
  };

  return (
    <>
      <h2 className={css.head}>Phone book</h2>
      <p className={css.disclaimer}>use it on your own risk</p>
      <input
        className={css.input}
        type="text"
        placeholder="search"
        onInput={e => searchItem(e.target.value)}
      />
    </>
  );
};

Input.propTypes = {
  searchItem: PropTypes.func,
};

export default Input;
