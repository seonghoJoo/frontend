import "./App.css";
import UserForm from "./components/UserForm";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Servlet from "./components/Servlet";
import Jsp from "./components/Jsp";
import ServletMvc from "./components/ServletMvc";
import FrontController from "./components/FrontController";
import NewForm from "./components/member/NewForm";
import Members from "./components/member/Members";

function App() {



  return (
      <BrowserRouter>
        <>
        <nav>
          <ul>
            <Servlet/>
            <Jsp/>
            <ServletMvc />
            <FrontController version={1}/>
            <FrontController version={2}/>
            <FrontController version={3}/>
            <FrontController version={4}/>
            <FrontController version={5}/>
          </ul>  
        </nav>  
        </>
      
      
        <Routes>
          <Route path="/new-form" element={<NewForm />} />
          <Route path="/servlet/members" element={<Members />} />
        </Routes>

      </BrowserRouter>


  );
}

export default App;
