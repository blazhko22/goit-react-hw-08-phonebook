// import ContactForm from '../ContactForm';
// import ContactList from '../ContactList';

// import s from './Render.module.css';

// function Render() {
//   return (
//     <div className={s.render}>
//       <div>
//         <h1 className={s.titleFhonebook}>Phonebook</h1>
//         <ContactForm />
//       </div>
//       <div>
//         <h2 className={s.titleContacts}>Contacts</h2>
//         <ContactList />
//       </div>
//     </div>
//   );
// }

// export default Render;

import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
// import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoure/PublicRoute';

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView'));

function Render() {
  const dispatch = useDispatch();
//   const isFetchingCurrentUser=useSelector(authSelectors.getIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

//   return ( !isFetchingCurrentUser && <Container>
//     <AppBar />

    <Suspense fullback={<p>Завантажуємо...</p>}>
        <Routes>
            <Route 
                path="/" 
                element={
                    <PublicRoute >
                        {/* <HomeView/> */}
                    </PublicRoute>
                } 
            />
            <Route 
                path="/register" 
                element={
                    <PublicRoute restricted>
                        {/* <RegisterView/> */}
                    </PublicRoute>
                } 
            />
            <Route 
                path="/login" 
                element={
                    <PublicRoute restricted>
                        {/* <LoginView/> */}
                    </PublicRoute>
                } 
            />
            <Route
                path="contacts"
                element={
                    <PrivateRoute>
                        <ContactsView />
                    </PrivateRoute>
                }
            />
            <Route 
                path="*" 
                element={
                    <PublicRoute >
                        {/* <HomeView/> */}
                    </PublicRoute>
                }
            />
        </Routes>
    </Suspense>
//   </Container>
    
//   );
}

export default Render;