import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Container/Menu";

import AddProduct from "./Components/Pages/AddProduct";

import Home from "./Components/Pages/Home";
import ListAnnonces from "./Components/Pages/ListAnnonces";
import Login from "./Components/Pages/Login";
import Product from "./Components/Pages/Product";
import SignUp from "./Components/Pages/SignUp";
import { AnnonceContext } from "./Contexts/AnnonceContext";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));

	return (
		<div>
			<AuthContext.Provider value={{ token, setToken }}>
				<Router>
					<Menu />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />

						<Route path="/product/add" element={<AddProduct />} />
						<Route path="/user/product" element={<ListAnnonces />} />

						<Route path="/product/:id" element={<Product />} />
					</Routes>
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
