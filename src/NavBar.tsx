import "./navbar.css";

const NavBar = () => {
    return <nav className="navbar">
    <div className="navbar-icon">
      <img src="./csLogo.jpg" alt="Logo" />
    </div>
    <div className="navbar-title">CS CLUB CODING COMPETITION</div>
    <div className="navbar-link">
      <a href="/SnowCollegeHackathon/">Problems</a>
    </div>
  </nav>
  
}

export default NavBar;