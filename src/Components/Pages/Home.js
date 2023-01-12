import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Home() {
	const [data, setData] = useState([]);
	const { token } = useContext(AuthContext);
	async function getAnnonces() {
		const res = await axios.get("/api/annonce/annonces");
		return setData(res.data.annonces);
	}

	useEffect(() => {
		getAnnonces();
	}, []);

	return (
		<>
			{console.log(token)}
			<ul className="products">
				{data.map((product) => (
					<li key={product._id}>
						<div className="product">
							<Link to={"/product/" + product._id}>
								<img className="product-image" src={product.image_url} alt="product" />
							</Link>
							<div className="product-nom">
								<Link to={"/product/" + product._id}>{product.nom}</Link>
							</div>
							<div className="product-categorie">{product.categorie}</div>
							<div className="product-quantite">{product.qteDispo}</div>
							<div className="product-prix">{product.prix}</div>
							<div className="product-description">{product.description}</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
