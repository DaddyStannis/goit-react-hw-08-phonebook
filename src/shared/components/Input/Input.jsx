import styles from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({ label = '', onChange = null, value = '', ...props }) => {
  return (
    <label className={styles.group}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        {...props}
      />
    </label>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};
