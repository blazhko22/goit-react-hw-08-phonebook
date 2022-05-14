import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

const ContactsItem = ({ name, number, phone, onClick }) => (
  <li className={s.item}>
    <p>
      {name}: &nbsp;{number || phone}
    </p>
    <button type="button" className={s.button} onClick={onClick}>
      Remove
    </button>
  </li>
);
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  phone: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ContactsItem;
