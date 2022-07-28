import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import SecretScan from './pages/SecretScan';
import WebScan from './pages/WebScan';
import {Bar} from  './components/Bar';
import {Footer} from './components/Footer';


function App() {
  return (
    <>
    
    <div className="App">
    <Bar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/web" element={<WebScan/>}/>
    <Route exact path="/secret" element={<SecretScan/>}/>
    </Routes>
    <Footer/>  

    </div>
    
    </>
  );
}

export default App;
