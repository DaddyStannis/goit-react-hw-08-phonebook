import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
