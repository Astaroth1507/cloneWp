import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/index.css";
import { UsersProvider } from "context/usersContext";
import { UsersCProvider } from "context/usersCarlosContext";
import { SocketProvider } from "context/socketContext";

ReactDOM.render(
	<React.StrictMode>
		<SocketProvider>
<UsersCProvider>
				<UsersProvider>
					<App />
				</UsersProvider>
			</UsersCProvider>



		</SocketProvider>
	</React.StrictMode>,
	document.getElementById("root")
);


reportWebVitals();
