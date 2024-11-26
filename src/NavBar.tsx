import "./navbar.css";

const NavBar = () => {
    return <nav className="navbar">
    <div className="navbar-icon">
      <img src="./csLogo.jpg" alt="Logo" />
    </div>
    <div className="navbar-title">CS Club Hackathon</div>
    <div className="navbar-link">
      <a href="/">Problems</a>
    </div>
  </nav>
  
}

export default NavBar;