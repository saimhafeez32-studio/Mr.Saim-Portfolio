import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarClass = [
    "navbar",
    !isHomePage ? "navbar-light" : "",
    scrolled ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={navbarClass}>
        <div className="container navbar-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            Mr.<span>Saim</span>
          </Link>

          <nav className={menuOpen ? "nav active" : "nav"}>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div
        className={
          menuOpen
            ? "mobile-overlay active"
            : "mobile-overlay"
        }
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;