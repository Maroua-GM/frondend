import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

import "../../index.css";

export default function SignUp(props) {
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const { token, setToken } = useContext(AuthContext);

	//const token = localStorage.getItem("token");

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const user = { nom, prenom, email, password };
		axios
			.post("/api/user/signup", user)
			.then((res) => {
				console.log(res);
				navigate("/login");
			})
			.then((err) => console.log(err));
	};

	return (
		<>
			{!token ? (
				<div className="form">
					<form onSubmit={submitHandler}>
						<ul className="form-container">
							<li>
								<h2>Creer un compte</h2>
							</li>
							<li>
								<label htmlFor="name">Nom</label>
								<input type="name" name="name" id="name" value={nom} onChange={(e) => setNom(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="prenom">Prenom</label>
								<input type="prenom" name="prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="email">Email</label>
								<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="rePassword">Re-Enter Password</label>
								<input type="password" id="rePassword" name="rePassword" value={rePassword} onChange={(e) => setRePassword(e.target.value)}></input>
							</li>
							<li>
								<button type="submit" className="button primary">
									Creer un compte
								</button>
							</li>
							<li>
								Vous avez un compte? <Link to="/login">Sign-in</Link>
							</li>
						</ul>
					</form>
				</div>
			) : (
				<div>vous etes deja connecté</div>
			)}
		</>
	);
}
