import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Ui/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './Components/Pages/UserForm'; import HomePage from './Components/Pages/HomePage';
import ViewTables from './Components/Pages/ViewTables';
import SuccessPage from './Components/Pages/SuccessPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <NavBar routesCollection={collection} />

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/viewTables" element={<ViewTables />}></Route>
          <Route path='/addUser' element={<UserForm />}></Route>
          <Route path='/successPage' element={<SuccessPage />}></Route>


        </Routes>
      </BrowserRouter>


    </div>
  );
}


const collection = [{
  path: "/",
  title: "Home",
}, {
  path: "/addUser",
  title: "Add User",
},
{
  path: "/viewTables",
  title: "View Tables",
}]

export default App;
