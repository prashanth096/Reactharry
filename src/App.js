

// import logo from './logo.svg';
import "./App.css";
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';

function App() {
 

  return (
    
  
     <>
      <Navbar title="Shakku" aboutText="About" />{" "}
      <div className="container">
        <TextForm heading="Enter your name here" />{" "}
       </div>
     </>
  );
}

export default App;
