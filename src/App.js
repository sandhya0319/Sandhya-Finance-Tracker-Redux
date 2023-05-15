import "./App.css";
import { Routes, Route } from "react-router-dom";
import FinanceForm from "./pages/transactions/components/FinanceForm";
import ViewFinanceData from "./pages/transactions/components/ViewFinanceData";
import ViewSingleData from "./pages/transactions/components/ViewSingleData";
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import EditForm from './pages/login/components/EditForm';
// import LoginPage from "./pages/Authentication/components/LoginPage";
// import RegisterPage from "./pages/Authentication/components/RegisterPage";
// import {ProtectedRoutes,UnprotectedRoutes} from "./Services/ProtectedRoutes";
//import { Transactioncontext } from "./pages/contexts/Transactioncontext";

function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>Finance Tracker</h1>
      </div>
     
        <BrowserRouter>
        <Routes>
            <Route path="/form" element={<FinanceForm />} />
            {/* <Route path="/form/:id" element={<FinanceForm />} />
            <Route path="/viewdata" element={<ViewFinanceData />} />
            <Route path="/viewsingledata" element={<ViewSingleData />} /> */}
        </Routes>
        
        </BrowserRouter>
      
  
  </div>
  );
}

export default App;
