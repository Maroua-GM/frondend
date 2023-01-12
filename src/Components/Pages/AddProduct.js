import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddProduct() {
	const [nom, setNom] = useState("");
	const [prix, setPrix] = useState("");
	const [description, setDescription] = useState("");
	const [categorie, setCategorie] = useState("");
	const [qteDispo, setQteDispo] = useState(0);
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	const config = {
		headers: {
			Authorization: localStorage.getItem("token"),
		},
	};

	let annonce = { nom, prix, description, categorie, qteDispo, image_url: image };
	const token = localStorage.getItem("token");

	async function createAnnonce() {
		await axios
			.post("/api/annonce/add", annonce, config)
			.then((res) => {
				console.log(res.data.result);
				navigate("/");
			})
			.catch((error) => console.log(error));
	}

	function submitHandler(e) {
		e.preventDefault();
		createAnnonce();
	}
	return (
		<>
			{token ? (
				<div className="form">
					<form onSubmit={submitHandler}>
						<ul className="form-container">
							<li>
								<h2>Creer une annonce</h2>
							</li>
							<li>
								<label htmlFor="name">Nom</label>
								<input type="name" name="name" id="name" value={nom} onChange={(e) => setNom(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="prix">Prix</label>
								<input type="prix" name="prix" id="prix" value={prix} onChange={(e) => setPrix(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="description">Description</label>
								<input type="description" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="qteDispo">Quantité disponible</label>
								<input type="number" id="qteDispo" name="qteDispo" value={qteDispo} onChange={(e) => setQteDispo(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="categorie">Catégorie</label>
								<input type="text" id="categorie" name="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}></input>
							</li>
							<li>
								<label htmlFor="image_url">URL Image</label>
								<input type="text" id="image_url" name="image_url" value={image} onChange={(e) => setImage(e.target.value)}></input>
							</li>
							<li>
								<button type="submit" className="button primary">
									Ajouter
								</button>
							</li>
						</ul>
					</form>
				</div>
			) : (
				<div>vous devez etre connecté pour ajouter des annonce</div>
			)}
		</>
	);
}
