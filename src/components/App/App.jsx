import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import styles from '../../styles/App.module.css';

const App = () => {
  return (
    <section className={styles.app}>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </section>
  );
};

export default App;
