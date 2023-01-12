import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	const [data, setData] = useState([]);
	const [token, setToken] = useState(localStorage.getItem("token"));

	async function getAnnonces() {
		const res = await axios.get("/api/annonce/annonces");
		return setData(res.data.annonces);
	}

	useEffect(() => {
		getAnnonces();
	}, []);

	return (
		<>
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
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
