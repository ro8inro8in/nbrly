import "../App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Main />
      <Login />
      <Signup />
      <Footer />
    </Router>
  );
}

export default App;
