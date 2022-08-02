import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginAndSignupPages/Login';
import Signup from './LoginAndSignupPages/Signup';
import Routing from './Routing/Routing';
import Header from './Components/UserComponents/Header';
import UserRouting from './Routing/UserRouting';
import SearchBar from './Components/UserComponents/SearchBar';
import AppliedJobs from './UserPages/AppliedJobs';
import Apply from './UserPages/Apply';
import Profile from './UserPages/Profile';
import AdminHeader from './Components/AdminComponent/AdminHeader';
import AdminRouting from './Routing/AdminRouting';
import { UpdateSharp } from '@mui/icons-material';
import DisplayJob from './HRPages/DisplayJob';
import AddJobs from './HRPages/AddJobs';
import HrRouting from './Routing/HrRouting';



function App() {
  return (
    <div className="App">
      
      <Routing />
      <UserRouting />
      <AdminRouting />
     
      <HrRouting />
     
     {/* <AddJobs /> */}
     
    </div>
  );
}

export default App;
