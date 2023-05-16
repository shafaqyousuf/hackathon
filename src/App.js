import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Home from "./screens/Home";
import CarDetail from "./screens/CarDetail";
import Profile from "./screens/Profile";
import CarAdd from "./screens/adminScreens/CarAdd";
import FrontScreen from "./screens/FrontScreen";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontScreen/>}/>
            <Route path="home" element={<Home />} />
            <Route path="cardetails" element={<CarDetail />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="caradd" element={<CarAdd />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
