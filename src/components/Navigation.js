import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const ProjetDisplay = props.projet;
  return (
    <>
      {ProjetDisplay ? (
        <div className="navigationProjet">
            <NavLink to="/" exact activeClassName="nav-active" className="hover">
              <li className="titleProjet">accueil</li>
            </NavLink>
            <NavLink to="/contact" activeClassName="nav-active" className="hover">
              <li className="titleProjet">contact</li>
            </NavLink>
        </div>
      ) : (
          <div className="navigation">
            <ul>
              <NavLink to="/" exact activeClassName="nav-active" className="hover">
                <li>accueil</li>
              </NavLink>
              <li className="nav-portfolio">portfolio
          <ul className="nav-projects">
                  <NavLink to="/projet-1" activeClassName="nav-active" className="hover">
                    <li>Sweet Home</li>
                  </NavLink>
                  <NavLink to="/projet-2" activeClassName="nav-active" className="hover">
                    <li>Bativigie</li>
                  </NavLink>
                  <NavLink to="/projet-3" activeClassName="nav-active" className="hover">
                    <li>Formation</li>
                  </NavLink>
                  <NavLink to="/projet-4" activeClassName="nav-active" className="hover">
                    <li>Talento Especial</li>
                  </NavLink>
                </ul>
              </li>

              <NavLink to="/contact" activeClassName="nav-active" className="hover">
                <li>contact</li>
              </NavLink>
            </ul>
          </div>
        )}
    </>
  );
};

export default Navigation;
