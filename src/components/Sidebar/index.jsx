import React from "react";
import "./styles/main.css";
import Alert from "./Alert";
import Header from "./Header";
import Contact from "./Contact";
import { useUsersContext } from "context/usersContext";
import "./../../pages/Chat/styles/main.css"



const Sidebar = () => {
	const { users: contacts } = useUsersContext();
	return (
		<aside className="sidebar">
			<Header/>
			<Alert />

			<div className="sidebar__contacts">
				{contacts.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
