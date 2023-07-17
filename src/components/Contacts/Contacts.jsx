import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import { addContact, removeContact } from 'api/getter';
import { fetchContacts } from 'redux/items/items-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { getItems } from 'redux/items/selectors';

const Contacts = () => {
  // const getState = ({ contacts }) => ({
  //   loading: contacts.loading,
  //   error: contacts.error,
  // });

  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  // const { loading, error } = useSelector(getState);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const getFiltredContacts = () => {
    const normalizeFilter = filter?.toLowerCase();
    const filterContacts = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  };

  const filtredArray = getFiltredContacts();
  console.log(contacts);
  const elements =
    filtredArray &&
    filtredArray.map(({ name, phone, id }) => {
      return (
        <Contact
          name={name}
          phone={phone}
          id={id}
          key={id}
          deleteItem={() => onRemoveContact(id)}
        />
      );
    });

  return <ul className={css.list}>{elements}</ul>;
};

export default Contacts;
