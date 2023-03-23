import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
