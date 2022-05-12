import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './ContactView.module.css'

import contactsOperations  from '../../redux/contacts/contacts-operations';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';

export default function ContctsView() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    function fetchContact(){
       dispatch(contactsOperations.fetchContacts())
 }
 fetchContact()
 }, [dispatch]);

  return (  
    <div className={s.render}>
      <div>
        <h1 className={s.titleFhonebook}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={s.titleContacts}>Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
}