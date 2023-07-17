import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletecontact } from 'components/redux/phonebook/actions';

const Contacts = () => {
  const dispatch = useDispatch();

  const search = useSelector(state => state.contacts.filters);
  const contacts = useSelector(state => state.contacts.contacts);

  const deleteItem = id => {
    dispatch(deletecontact(id));
  };

  const filteredcontacts = () => {
    return contacts.filter(el =>
      search === undefined
        ? el
        : el.name.toLowerCase().includes(search.status.toLowerCase())
    );
  };

  return (
    <div className={css.list}>
      {filteredcontacts().map(el => (
        <Contact contacts={el} key={el.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Contacts;
