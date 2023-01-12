import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import "../../Style/Menu.css";

export const Menu = () => {
	//const [token, setToken] = useState(localStorage.getItem("token"));
	const { token, setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	function logout() {
		setToken(localStorage.removeItem("token"));
		navigate("/");
	}

	return (
		<>
			{token ? (
				<nav>
					<ul className="navMenu">
						<li>
							<NavLink to="/">Acceuil</NavLink>
						</li>
						<li>
							<NavLink to="/product/add">Ajouter une annonce</NavLink>
						</li>
						<li>
							<a onClick={logout}>Se deconnecter</a>
						</li>
					</ul>
				</nav>
			) : (
				<nav>
					<ul className="navMenu">
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
			)}
		</>
	);
};
