import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LoyaltyCheckers from "./pages/LoyaltyCheckers";
import Messages from "./pages/Messages";
import Missions from "./pages/Missions";
import Account from "./pages/Account";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import BookCall from "./pages/BookCall";
import Upgrade from "./pages/Upgrade";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import VisitPage from "./pages/VisitPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VisitPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/loyalty-checkers" element={<LoyaltyCheckers />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/missions" element={<Missions />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/book-call" element={<BookCall />} />
                  <Route path="/upgrade" element={<Upgrade />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Register from "./components/Register";
// import ProtectedRoute from "./components/ProtectedRoute";
// import VisitPage from "./components/VisitPage";
// import CommunityPage from "./components/CommunityPage";

// <Router>
//   <Routes>
//     <Route path="/" element={<VisitPage />} />
//     <Route path="/community" element={<CommunityPage />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />
//     <Route
//       path="/dashboard"
//       element={<ProtectedRoute component={Dashboard} />}
//     />
//   </Routes>
// </Router>
