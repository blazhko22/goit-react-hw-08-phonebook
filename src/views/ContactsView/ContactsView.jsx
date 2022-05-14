import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import s from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <div className={s.container}>
      <div>
        <h1 className={s.titleFhonebook}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={s.titleContacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}