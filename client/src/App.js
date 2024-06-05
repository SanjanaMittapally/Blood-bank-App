import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from './pages/Dashboard/Donar.js';
import Hospitals from "./pages/Dashboard/Hospitals.js";
import OrganisationPage from "./pages/Dashboard/OrganisationPage.js";
import Consumer from './pages/Dashboard/Consumer.js'
import Donation from "./pages/Dashboard/Donation.js";
import Analytics from "./pages/Dashboard/Analytics.js";
import DonarList from "./pages/Admin/DonarList.js";
import HospitalList from "./pages/Admin/HospitalList.js";
import OrgList from "./pages/Admin/OrgList.js";
import AdminHome from "./pages/Admin/AdminHome.js";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>}
        />
        <Route path="/donar-list" element={
          <ProtectedRoute>
            <DonarList />
          </ProtectedRoute>}
        />
        <Route path="/hospital-list" element={
          <ProtectedRoute>
            <HospitalList />
          </ProtectedRoute>}
        />
        <Route path="/org-list" element={
          <ProtectedRoute>
            <OrgList />
          </ProtectedRoute>}
        />
        <Route path="/donar" element={
          <ProtectedRoute>
            <Donar />
          </ProtectedRoute>}
        />
        <Route path="/donation" element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>}
        />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>}
        />
        <Route path="/consumer" element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>}
        />
        <Route path="/hospital" element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>}
        />
        <Route path="/organisation" element={
          <ProtectedRoute>
            <OrganisationPage />
          </ProtectedRoute>}
        />
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>}
        />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>}
        />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>}
        />
      </Routes>
    </>
  );
};

export default App;
