import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import ConnectionProfileView from "./components/ConnectionProfileView"
// import GetStarted from "./components/GetStarted"
import ErrorPage from "./components/ErrorPage"
import VerifyEmail from "./components/VerifyEmail"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermOfService"
import RefundPolicy from "./components/RefundPolicy"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"
import Subscription from "./components/Subscription"
import Chat from "./components/Chat"


function App() {


  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>

            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/connectionprofile" element={<ConnectionProfileView />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termofservice" element={<TermsOfService />} />
              <Route path="/refundpolicy" element={<RefundPolicy />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />

              {/* <Route path="/chat" element={<Chat />} /> */}


            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
