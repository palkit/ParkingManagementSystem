import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/Signup';
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SignUp></SignUp>
      <ParkingSpace></ParkingSpace>
      <Footer></Footer>
    </div>
  );
}

export default App;
