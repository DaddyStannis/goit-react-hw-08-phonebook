import styles from './LoginForm.module.css';
import Input from 'shared/components/Input/Input';
import Button from 'shared/components/Button/Button';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend>
          <strong>Login</strong>
        </legend>

        <div className={styles['input-wrapper']}>
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
          Login
        </Button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
