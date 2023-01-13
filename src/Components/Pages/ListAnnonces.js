import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnnonceContext } from "../../Contexts/AnnonceContext";
import { AuthContext } from "../../Contexts/AuthContext";
import Erreur from "../UI/Erreur";

export default function ListAnnonces() {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const { token, setToken } = useContext(AuthContext);

	const config = {
		headers: {
			Authorization: token,
		},
	};

	function deleteAnnonce(id) {
		axios
			.delete("/api/annonce/" + id, config)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	}
	async function getUserAnnonces() {
		const res = await axios.get("/api/annonce/getAnnonceUser", config);
		return setData(res.data.annonces);
	}

	useEffect(() => {
		getUserAnnonces();
	}, []);
	return (
		<>
			{data.length === 0 ? (
				<div>
					<Erreur message="pas d'annonces pour le moment" />
					<button
						onClick={() => {
							navigate("/product/add");
						}}
					>
						Creer une annonce
					</button>
				</div>
			) : (
				<ul className="products">
					{data.map((product) => (
						<li key={product._id}>
							<div className="product">
								<Link to={"/product/" + product._id}>
									<img className="product-image" src={product.image_url} alt="product" />
								</Link>
								<div className="product-nom">
									<Link to={"/product/" + product._id}>nom: {product.nom}</Link>
								</div>
								<div className="product-categorie">categorie: {product.categorie}</div>
								<div className="product-quantite">quantité: {product.qteDispo}</div>
								<div className="product-prix">prix: {product.prix}</div>
								<div className="product-description">Description :{product.description}</div>
								<button onClick={deleteAnnonce(product._id)}>Supprimer</button>
								<AnnonceContext.Provider value={product}>
									<Link to={"/product/add"}>
										<button>Modifier l'annonce</button>
									</Link>
								</AnnonceContext.Provider>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
