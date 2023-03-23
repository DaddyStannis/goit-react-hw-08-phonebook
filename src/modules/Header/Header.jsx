import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operations';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  let components;
  if (isLoggedIn) {
    components = (
      <>
        <strong>{user.name}</strong>
        <a
          className={styles.authLink}
          onClick={e => {
            e.preventDefault();
            handleLogout();
          }}
        >
          Logout
        </a>
      </>
    );
  } else {
    components = (
      <>
        <NavLink className={styles.authLink} to="/login">
          Login
        </NavLink>
        <NavLink className={styles.authLink} to="/signup">
          Signup
        </NavLink>
      </>
    );
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.auth}>{components}</div>
      </div>
    </header>
  );
};

export default Header;
