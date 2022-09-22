import "./Header.scss";

import autLogo from "./../../assets/aut-logo.png";
import itLogo from "./../../assets/it-logo.png";
import meLogo from "./../../assets/me-logo.png";
import robLogo from "./../../assets/rob-logo.png";

function Header() {
  return (
    <header className="Header">
      <ul className="Links">
        <li>
          <a href="#" className="Header-Link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="Header-Link">
            Schule
          </a>
        </li>
        <li>
          <a href="#" className="Header-Link">
            Abteilungen
          </a>
        </li>
        <li>
          <a href="#" className="Header-Link">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="Header-Link">
            Aktuelles
          </a>
        </li>
      </ul>
      <div className="Profile">
        <img src={itLogo} className="App-logo" alt="logo" />
        <img src={autLogo} className="App-logo" alt="logo" />
        <img src={meLogo} className="App-logo" alt="logo" />
        <img src={robLogo} className="App-logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
