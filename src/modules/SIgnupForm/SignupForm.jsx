import styles from './SignupForm.module.css';
import Input from 'shared/components/Input/Input';
import Button from 'shared/components/Button/Button';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

const SignupForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend>
          <strong>Register</strong>
        </legend>

        <div className={styles['input-wrapper']}>
          <div className={styles['name-wrapper']}>
            <Input
              label="First name"
              autoFocus
              required
              name="first-name"
              value={state['first-name']}
              onChange={handleChange}
            />
            <Input
              label="Last name"
              required
              name="last-name"
              value={state['last-name']}
              onChange={handleChange}
            />
          </div>
          <Input
            label="Email"
            type="email"
            required
            name="email"
            value={state['email']}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            required
            name="password"
            value={state['password']}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" required>
          Sign up
        </Button>
      </fieldset>
    </form>
  );
};

export default SignupForm;
