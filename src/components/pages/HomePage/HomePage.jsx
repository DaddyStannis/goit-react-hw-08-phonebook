import Section from 'components/shared/components/Section/Section';
import ContactForm from 'components/modules/ContactForm/ContactForm';
import ContactList from 'components/modules/ContactList/ContactList';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectLoadingFlag,
} from 'redux/contacts/contacts-selectors';
import {
  fetchContacts,
  removeContact,
  addContact,
} from 'redux/contacts/contacts-operations';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';

function isDublicate(name, contacts) {
  const normalizedName = name.toLowerCase();

  const dublicate = contacts.find(
    ({ name }) => normalizedName === name.toLowerCase()
  );

  return Boolean(dublicate);
}

const HomePage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectLoadingFlag);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = useCallback(() => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    }
  }, [contacts, filter]);

  const handleSubmit = useCallback(
    ({ name, number }) => {
      if (isDublicate(name, contacts)) {
        alert('This contact already exist');
        return;
      }
      dispatch(addContact({ name, number }));
    },
    [contacts]
  );

  const handleDelete = useCallback(
    id => {
      dispatch(removeContact(id));
    },
    [contacts]
  );

  const handleFilter = useCallback(
    str => {
      setFilter(str.toLowerCase());
    },
    [filter]
  );

  const filteredContacts = useMemo(
    () => getFilteredContacts(),
    [filter, contacts]
  );

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      {error && <ErrorField>{error}</ErrorField>}
      {isLoading && (
        <div>
          <strong style={{ fontSize: '18px' }}>Loading...</strong>
        </div>
      )}
      <Section title="Contacts">
        <ContactList
          onFilter={handleFilter}
          onDelete={handleDelete}
          contacts={filteredContacts}
        />
      </Section>
    </div>
  );
};

export default HomePage;
