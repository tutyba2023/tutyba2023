import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './imdb.png';


function Header() {

  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div>
      <nav className={`${styles.navbar}`}>

        {/* logo */}
        <div className="logo" >
          <img src={logo} alt="Logo" height={"50px"} />
        </div>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li onClick={removeActive}>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
          </li>
        </ul>

        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
