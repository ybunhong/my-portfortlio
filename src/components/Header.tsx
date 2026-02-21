import { Link as RouterLink } from "react-router-dom";
import "../header.css";

const headerContent = [
  {
    title: "Home",
    link: "/",
  },
  { title: "Experiences", link: "/experiences" },
  { title: "Contact", link: "/contact" },
  { title: "About Me", link: "/aboutme" },
];

export default function Header() {
  return (
    <header className="header-bar">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="nav-menu">
        {headerContent.map((items) => (
          <RouterLink
            key={items.title}
            to={items.link}
            className="nav-link"
            style={{ fontFamily: "notable", fontSize: "20px", paddingLeft: "30px" }}
          >
            {items.title}
          </RouterLink>
        ))}
      </nav>
    </header>
  );
}

