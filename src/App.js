import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Container/Menu";

import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Routes>
		</Router>
	);
}

export default App;
