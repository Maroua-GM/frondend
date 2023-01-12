import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function ListAnnonces() {
	const { token, setToken } = useContext(AuthContext);
	return <div>ListAnnonces</div>;
}
