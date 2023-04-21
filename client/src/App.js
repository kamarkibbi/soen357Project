/* import './App.css';
import Login from './components/js/login';
import SignUpOne from './components/js/signUpOne';
import SignUpTwo from './components/js/signUpTwo';
import Productivity from './components/js/productivity';
import SchedulePage from './components/js/schedulePage';

function App() {
  return (
    <Login/>
  );
}

export default App;
 */

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/js/login';
import SignUpOne from './components/js/signUpOne';
import SignUpTwo from './components/js/signUpTwo';
import Productivity from './components/js/productivity';
import SchedulePage from './components/js/schedulePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signupone" element={<SignUpOne />} />
        <Route path="/signuptwo" element={<SignUpTwo />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/schedulepage" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;