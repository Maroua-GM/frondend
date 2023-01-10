import React from "react";
import { NavLink } from "react-router-dom";
import "../../Style/Menu.css";

export const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Acceuil</NavLink>
				</li>
				<li>
					<NavLink to="/login">Se connecter</NavLink>
				</li>
				<li>
					<NavLink to="/signup">S'identifier</NavLink>
				</li>
			</ul>
		</nav>
	);
};
