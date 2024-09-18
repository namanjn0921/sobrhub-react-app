// import "./App.css";
// import Composlides from "./composlides.jsx";
// import Header from "./header.jsx";
// import Slideshow from "./slideshow.jsx";
// import Middlediv from "./middlediv.jsx";
// import AboutUs from "./aboutus.jsx";

// function App() {
//   return (
//     <div>
//       <style>

//       </style>
//       <Header></Header>
//       <Slideshow></Slideshow>
//       <Middlediv></Middlediv>
//       <Composlides />
//       <AboutUs/>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Home from "./home.jsx";
import Privat from "./privat.jsx";
import Signin from "./signin.jsx"
import Signup from "./signup.jsx"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";



const App = () => {
  return (

    <Router>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/privat" element={<Privat />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      
    </Routes>
  </Router>
  );
};

export default App;
