import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import "../../index.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function login() {
		const user = { email, password };
		const res = await axios.post("/api/user/login", user);
		return res;
	}

	const { token, setToken } = useContext(AuthContext);

	function submitHandler(e) {
		e.preventDefault();
		login().then((res) => {
			setToken(res.data.token);
			localStorage.setItem("token", "Bearer " + res.data.token);
			console.log(res);
			navigate("/");
		});
	}
	return (
		<>
			{token === "" ? (
				<div className="form">
					<form onSubmit={submitHandler}>
						<ul className="form-container">
							<li>
								<h2>Sign-In</h2>
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
								<button type="submit" className="button primary">
									Signin
								</button>
							</li>
							<li>Vous voulez vous inscrire?</li>
							<li>
								<Link to="/signup" className="button secondary text-center">
									Creer un Compte
								</Link>
							</li>
						</ul>
					</form>
				</div>
			) : (
				<div> Vous etes deja connecté</div>
			)}
		</>
	);
}
