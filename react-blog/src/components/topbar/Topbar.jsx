import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
          <div className="toplogo">Smart Academy</div>
        </Link>
        <div className="toplogo-sub"> Leading Through Innovation </div>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" exact to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" exact to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" exact to="/courses">
              COURSES
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" exact to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            Emergency? <br />
            Call:+91 9037318303
          </li>
        </ul>

        <ul className="topList">
          <li className="topListItem-button">CALL US</li>
        </ul>
      </div>
    </div>
  );
}
