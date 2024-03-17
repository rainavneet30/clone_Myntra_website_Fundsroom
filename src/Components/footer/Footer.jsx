import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdCall, MdEmail, MdHome, MdModeComment } from "react-icons/md";
import { FaLinkedin, FaGithub, FaYoutube, FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerList">
          <h4>SHOPPING</h4>
          <ul>
            <li>
              <Link>All Products</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>3D Studio <sup style={{color:'red'}}>New</sup></Link>
            </li>
            <li>
              <Link>Beauty<sup style={{color:'red'}}>New</sup></Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            
            <li>
              <Link to="/bag">Bag</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>KEEP IN TOUCH</h4>
          <ul>
            <li>
              <Link>
                <MdCall className="footerIcon" /> Navneet Rai
              </Link>
            </li>
            <li>
              <Link>
                <MdEmail className="footerIcon" />
                E-Mail
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/navneet-rai-8b31b514b"
                target="blank"
              >
                <FaLinkedin className="footerIcon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/rainavneet30" target="blank">
                <FaGithub className="footerIcon" />
                Github
              </a>
            </li>
      
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
