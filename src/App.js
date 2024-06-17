import MainPane from "./component/admin/mainPanel/MainPane";
import MaxBid from "./component/admin/maxbid/MaxBid";
import Body from "./component/customer/frontPage/Body";
import FrontPage from "./component/customer/frontPage/Header";
import Login from "./component/customer/loginPage/Login";
import RegistrationPage from "./component/customer/registerationPage/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <FrontPage/>
    },
    {
      path : "/LogIN",
      element : <Login/>
    },
    {
      path : "/signup",
      element : <RegistrationPage/>
    },
    {
      path : "/admin",
      element : <MainPane/>
    }
    
  ])
  return(
      <RouterProvider router={routes}/>
  )
}

export default App;
