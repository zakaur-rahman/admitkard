import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Otp from './Otp';
import SignIn from './SignIn';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route exact path='/otp' element={<Otp/>} />
          <Route exact path='/success' element={<Success/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
