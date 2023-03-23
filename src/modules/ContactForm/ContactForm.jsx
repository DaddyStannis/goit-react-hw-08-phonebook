import PropTypes from 'prop-types';
import styles from './contact-form.module.css';
import NumberField from './NumberField/NumberField';
import NameField from './NameField/NameField';
import Button from 'shared/components/Button/Button';
import useForm from 'shared/hooks/useForm';
import initialState from './initial-state';

const ContactForm = ({ onSubmit }) => {
  const { state, _, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles['input-wrapper']}>
        <NameField onChange={handleChange} value={state.name} />
        <NumberField onChange={handleChange} value={state.number} />
      </div>

      <Button type="submit">Add</Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
