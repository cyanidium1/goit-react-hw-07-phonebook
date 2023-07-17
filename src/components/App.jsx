import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';
import AddRandom from './AddRandom/AddRandom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addcontact, deletecontact } from './redux/phonebook/actions';
//comment
export const App = () => {
  const dispatch = useDispatch();
  useSelector(state => console.log(state.contacts.filter));

  const contacts = useSelector(state => state.contacts.contacts);

  //need it here cos used in 2 components
  const addItem = (name, tel) => {
    const isExist = contacts.find(
      e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isExist) {
      alert('Already exists');
      return;
    }

    dispatch(addcontact(name, tel));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input />
      <Contacts />
      <Form addItem={addItem} />
      <Kek />
      <AddRandom addItem={addItem} />
    </div>
  );
};
