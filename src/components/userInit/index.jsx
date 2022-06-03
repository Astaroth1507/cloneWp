import React from "react";
import "./styles/main.css";

import Contact from "./SelecU";

import { useUsersCContext } from "context/usersCarlosContext";

const UserInicio = () => {
	const { Carlos: contactsCarlos } = useUsersCContext();
	return (
		<aside className="sidebar">


			<div className="sidebar__contacts">
				{contactsCarlos.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}

			</div>
		</aside>
	);
};

export default UserInicio;