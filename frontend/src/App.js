/* eslint-disable no-unused-vars */


import { createTheme,ThemeProvider } from '@mui/material/styles';
import './App.css';


import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Home from './Pages/HomePage/HomeRequestor';
import RequestPage from './Pages/RequestorPage/RequestPage';
import Login from './Pages/LoginPage/Login';
import Notifications from './Pages/NotificationPage/Notifications';
import Profile from './Pages/ProfilePage/Profile';
import ProfileApprover from './Pages/ProfilePage/ProfileApprover';

import Logout from './Pages/LogoutPage/Logout';
import HomeApprover from './Pages/HomePage/HomeApprover';

import NotificationsApprover from './Pages/NotificationPage/NotificationsApprover';
import LogoutApprover from './Pages/LogoutPage/LogoutApprover';
import ViewUsersPage from './Pages/ApproverPage/ViewUsersPage';

import RequestFormPage from './Pages/RequestorPage/RequestFormPage';
import ViewRequestsPage from './Pages/ApproverPage/ViewRequestsPage';
import AddUsersPage from './Pages/ApproverPage/AddUsersPage';
import HomeReviewer from './Pages/HomePage/HomeReviewer';
import ProfileReviewer from './Pages/ProfilePage/ProfileReviewer';
import LogoutReviewer from './Pages/LogoutPage/LogoutReviewer';
import NotificationsReviewer from './Pages/NotificationPage/NotificationsReviewer';

import ReviewRequestPage from './Pages/Reviewer/ReviewRequestPage';
import ReviewPendingRequestPage from './Pages/Reviewer/ReviewPendingRequestPage';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#000080'
    }
}})

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path= "/" element = {<Login/>} />
            <Route path= "/home" element = {<Home/>} />
            <Route path= "/request" element = {<RequestPage/>} />
            <Route path= "/create-request" element = {<RequestFormPage/>} />
            <Route path= "/notifications" element = {<Notifications/>} />
            <Route path= "/profile" element = {<Profile/>} />
            <Route path= "/logout" element = {<Logout/>} />

            <Route path= "/homeApprover" element = {<HomeApprover/>} />
            <Route path= "/viewRequests" element = {<ViewRequestsPage/>} />
            <Route path= "/viewUsers" element = {<ViewUsersPage/>} />
            <Route path= "/add-user" element = {<AddUsersPage/>} />
            <Route path= "/notificationsApprover" element = {<NotificationsApprover/>} />
            <Route path= "/profileApprover" element = {<ProfileApprover/>} />
            <Route path= "/logoutApprover" element = {<LogoutApprover/>} />

            <Route path= "/homeReviewer" element = {<HomeReviewer/>} />
            <Route path= "/profileReviewer" element = {<ProfileReviewer/>} />
            <Route path= "/logoutReviewer" element = {<LogoutReviewer/>} />
            <Route path= "/notificationsReviewer" element = {<NotificationsReviewer/>} />
            <Route path= "/reviewRequests" element = {<ReviewRequestPage />} />
            <Route path= "/review-pending-requests" element = {<ReviewPendingRequestPage />} />

            



          </Routes>
      </BrowserRouter>
      
      

    
    </div>
  );
}

export default App;
