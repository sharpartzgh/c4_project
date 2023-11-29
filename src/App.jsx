import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
