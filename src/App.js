import './App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "react-toastify/dist/ReactToastify.css";

import Loader from './components/Loader/Loader';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy, memo, Suspense } from 'react';
import AddQue from './components/Exams/AddQue'
import MenuBarForHeader from './components/Layout/MenuBarForHeader'

const Home = lazy(() => import('./components/Home/Home'));
const Login = lazy(() => import('./components/Auth/Login'));
const Signup = lazy(() => import('./components/Auth/Signup'));
const OnlyAdmin = lazy(() => import('./components/Admin/OnlyAdmin'));
const Logout = lazy(() => import('./components/Auth/Logout'));
const ProtectedRoute = lazy(() => import('./components/Auth/ProtectedRoute'));
const NotFound = lazy(() => import('./components/OtherPages/NotFound'));
const UnAuthorized = lazy(() => import('./components/OtherPages/UnAuthorized'));
const OnlyUser = lazy(() => import('./components/User/OnlyUser'));
const AddExams = lazy(() => import('./components/Exams/AddExams'));
// const MenuBarForHeader = lazy(() => import('./components/Layout/MenuBarForHeader'));
// const AddQue = lazy(() => import('./components/Exams/AddQue'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <MenuBarForHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* <Route element={<ProtectedRoute role={"admin"} />}> */}
            <Route path="/onlyadmin" element={<OnlyAdmin />} />
            <Route path="/addexams" element={<AddExams />} />
            <Route path="/add-que" element={<AddQue />} />

            {/* </Route> */}
            <Route element={<ProtectedRoute role={"user"} />}>
              <Route path="/onlyuser" element={<OnlyUser />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="/unauthorized" element={<UnAuthorized />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={3000} position="top-center" theme="colored" />
      </div>
    </Router >
  );
}

export default memo(App);
