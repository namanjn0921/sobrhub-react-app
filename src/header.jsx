// import './header.css'

// function header() {
//   return (
//     <div>
//       <div className="logodiv">
//         <img
//           className="logoimg"
//           src="https://img.hotimg.com/sobr1.png"
//           alt="logo"
//         />
//         <div className="sign">
//           <button className="signin">Sign in </button>
//           <button className="signin">Register</button>
//         </div>
//       </div>
//       <div className="comps">
//         <button className="compsb">Home</button>
//         <button className="compsb">Advices</button>
//         <button className="compsb">Group Session</button>
//         <button className="compsb">Private consultation</button>
//         <button className="compsb">Challenges</button>
//         <button className="compsb">About Us</button>
//         <button className="compsb">Contact Us</button>
//       </div>
//     </div>
//   );
// }
// export default header;




import './header.css';

function Header() {
  return (
    <header>
      <div className="logodiv">
        <img
          className="logoimg"
          src="https://img.hotimg.com/sobr1.png"
          alt="logo"
        />
        <div className="sign">
          <button className="signin">Sign in</button>
          <button className="signin">Register</button>
        </div>
      </div>
      <nav className="comps">
        <button className="compsb">Home</button>
        <button className="compsb">Advices</button>
        <button className="compsb">Group Session</button>
        <button className="compsb">Private Consultation</button>
        <button className="compsb">Challenges</button>
        <button className="compsb">About Us</button>
        <button className="compsb">Contact Us</button>
      </nav>
    </header>
  );
}

export default Header;

