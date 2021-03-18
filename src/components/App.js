import "../App.css";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Main from "./pages/Main";
import Footer from "./Footer";

function App() {
    return (
      <Route>
        {/* <Main /> */}
        <Login />
        {/* <Signup /> */}
        <Footer /> 
      </Route>
    );
  }

  //trying to set up route paths
//   return (
//     <div className="App">
//       <div className="navlinks">
//         <Switch>
//           <Route exact path="/"><Main></Route>
//           <Route exact path="/Login">
//             <Login />
//           </Route>
//           {/* <Route exact path="/Profile">
//             <Profile />
//           </Route>
//           <Route exact path="/Signup">
//             <Signup />
//           </Route> */}
//         </Switch>
//       </div>
//     </div>
//   );
// }
export default App;
