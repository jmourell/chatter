import React from "react";
const Header: React.FC = () => {
  return (
    <nav className="landing-header">
      <a className="landing-header__anchor" href="#">
        <img className="landing-header__anchor-image"></img>
        <h2 className="landing-header_label">Chatter</h2>
        <div className="landing-header_nav-list-container">
          <ul className="landing-header_nav-list">
            <li className="landing-header_nav-list-item">
              <a className="landing-header_nav-list-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </a>
    </nav>
  );
};
export default Header;
