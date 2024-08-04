import { BrowserRouter ,Route,Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import Login_Page from "./Login_Page";
import Dashboard from "./Dashboard";

import NoteContext from "./NoteContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Myprofile from "./Myprofile";
import Addjob from "./Addjob";
import Mystats from "./Mystats";
import Alljobs from "./Alljobs";
import BigSidebar from "./BigSidebar";
import Showjobs from "./Showjobs";
import ForgotPassword from "./ForgotPassword";
import Pagination from "./Pagination";
function App() {
  return (
  <NoteContext>
  
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route element={<Showjobs/>}></Route>
    <Route path="login" element={<Login_Page/>}></Route>
    <Route path="dashboard" element={<Dashboard/>}></Route>
    <Route path="myprofile" element={<Myprofile />} ></Route>
    <Route path="addjob" element={<Addjob/>}></Route>
    <Route path="mystats" element={<Mystats/>}></Route>
    <Route path="alljobs" element={<Alljobs/>}></Route>
    <Route path="forgotpassword" element={<ForgotPassword/>}></Route>
    <Route path="*" element={<ErrorPage/>}></Route>
   </Routes>
   </BrowserRouter>
   </NoteContext>
  );
}

export default App;
