import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../index.css";

export default function Product() {
	const { id } = useParams();
	const annonce = { nom, pris, description, image_url, qte, qteDispo, categorie };
	async function getAnnonce() {
		const res = await axios.get("/api/annonce/" + id);
		return res;
	}

	const product = data.products.find((x) => x._id === id);
	return (
		<div>
			<div className="back-to-result">
				<Link to="/">Retour</Link>
			</div>
			<div className="details">
				<div className="details-image">
					<img src={product.image} alt="product" />
				</div>
				<div className="details-info">
					<ul>
						<li>
							<h4>{product.name}</h4>
						</li>
						<li>
							{product.rating} Stars ({product.numReviews} Reviews)
						</li>
						<li>
							Price: <b>${product.price}</b>
						</li>
						<li>
							Description:
							<div>{product.description}</div>
						</li>
					</ul>
				</div>
				<div className="details-action">
					<ul>
						<li>Price: {product.price}</li>
						<li>Status: {product.status}</li>
						<li>
							Qty:
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</li>
						<li>
							<button className="button primary">Ajouter au Panier</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
