import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Sidebar from "components/Sidebar";
import Chat from "pages/Chat";
import SelectOOO from "./components/userInit";

const userPrefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
	const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);

	useEffect(() => {
		if (userPrefersDark) document.body.classList.add("dark-theme");
		stopLoad();
	}, []);

	const stopLoad = () => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), 3000);
	};

	if (!appLoaded) return <Loader done={startLoadProgress} />;

	return (
	<div className="app">
    			<p className="app__mobile-message"> Only available on desktop 😊. </p>
    			<Router>
    				<div className="app-content">


    					<Route exact path="/" component={SelectOOO}/>

    					<Switch>
    					    <Route path="/usuario/:idUsu" >
    					    <Route path="/usuario/:idUsu" component={Sidebar}/>
    					    <Route path="/usuario/:idUsu/chat/:id" component={Chat}/>
    					    <Route exact path="/usuario/:idUsu/" component={Home}/>
    					    </Route>
    					</Switch>
    				</div>
    			</Router>
    		</div>
	);
}

export default App;
