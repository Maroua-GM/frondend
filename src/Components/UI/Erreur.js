import React from "react";

export default function Erreur(props) {
	return (
		<span class="error" id="errorname">
			{props.message}
		</span>
	);
}
