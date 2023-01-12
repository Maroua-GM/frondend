import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../index.css";

export default function Product() {
	const { id } = useParams();
	const [annonce, setAnnonce] = useState({});

	useEffect(() => {
		getAnnonce();
	}, []);

	async function getAnnonce() {
		await axios.get("/api/annonce/" + id).then((res) => setAnnonce(res.data));
	}

	return (
		<>
			{console.log(annonce)}
			<div>
				<div className="back-to-result">
					<Link to="/">Retour</Link>
				</div>
				<div className="details">
					<div className="details-image">
						<img src={annonce.image_url} alt="product" />
					</div>
					<div className="details-info">
						<ul>
							<li>
								<h4>{annonce.nom}</h4>
							</li>

							<li>
								Price: <b>${annonce.prix}</b>
							</li>
							<li>
								Description:
								<div>{annonce.description}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
