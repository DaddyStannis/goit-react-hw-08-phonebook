import PropTypes from 'prop-types';

const ErrorField = ({ children }) => {
  return (
    <div>
      <strong style={{ color: 'red', fontSize: '18px' }}>
        Error: <span>{children}</span>
      </strong>
    </div>
  );
};

export default ErrorField;

ErrorField.propTypes = {
  children: PropTypes.node,
};
