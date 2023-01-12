import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Erreur(props) {
	return (
		<div className="alert alert-warning" role="alert">
			{props.message}
		</div>
	);
}
