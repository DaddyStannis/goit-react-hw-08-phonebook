import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { selectAuthError } from 'redux/auth/auth-selectors';
import SignupForm from 'components/modules/SIgnupForm/SignupForm';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';

const SignupPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);

  function handleSignup(data) {
    const name = `${data['first-name']} ${data['last-name']}`;
    const { email, password } = data;
    dispatch(signup({ name, email, password }));
  }

  return (
    <div className="container">
      <div>
        <SignupForm onSubmit={handleSignup} />
        {error && <ErrorField>{error}</ErrorField>}
      </div>
    </div>
  );
};

export default SignupPage;
