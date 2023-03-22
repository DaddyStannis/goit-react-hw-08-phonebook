import styles from './login-page.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);

  function handleSignup(data) {
    const { email, password } = data;
    dispatch(login({ email, password }));
  }

  return (
    <div className="container">
      <div>
        <LoginForm onSubmit={handleSignup} />
        {error && <ErrorField>{error}</ErrorField>}
      </div>
    </div>
  );
};

export default LoginPage;
