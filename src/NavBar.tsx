import "./navbar.css";

const NavBar = () => {
    return <nav className="navbar">
    <div className="navbar-icon">
      <img src="./csLogo.jpg" alt="Logo" />
    </div>
    <div className="navbar-title">leetcode competition</div>
    <div className="navbar-container-link">
      <div className="navbar-link">
        <a href="/SnowCollegeHackathon/">Problems</a>
      </div>
      <div className="navbar-link">
        <a href="/SnowCollegeHackathon/rules">Rules</a>
      </div>
    </div>
  </nav>
  
}

export default NavBar;