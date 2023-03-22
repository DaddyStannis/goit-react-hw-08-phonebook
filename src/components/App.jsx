import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import { refresh } from 'redux/auth/auth-operations';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Fetching user data...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<HomePage />}
            ></PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<LoginPage />}
            ></RestrictedRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<SignupPage />}
            ></RestrictedRoute>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <RestrictedRoute
            redirectTo="/"
            component={<LoginPage />}
          ></RestrictedRoute>
        }
      />
    </Routes>
  );
};

export default App;
