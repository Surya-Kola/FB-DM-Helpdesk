import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/signUp';
import Login from './components/Login';
import AgentDashboard from './components/AgentDashboard';
import ConnectFB from './components/ConnectFB';
import DeletePage from './components/DeletePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/connect-fb' element={<ConnectFB/>}/>
          <Route path='/agent' element={<AgentDashboard/>} />
          <Route path='/delete-page' element={<DeletePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
