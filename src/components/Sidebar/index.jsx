import React from "react";
import "./styles/main.css";
import Alert from "./Alert";
import Header from "./Header";
import Contact from "./Contact";
import { useUsersContext } from "context/usersContext";
import "./../../pages/Chat/styles/main.css"
import {useParams} from "react-router-dom";



const Sidebar = () => {
	const { users: contacts } = useUsersContext();
	const {idUsu} = useParams();
	let user = contacts.filter((user) => user.id !== Number(idUsu));
	console.log(user);
	return (
		<aside className="sidebar">
			<Header/>
			<Alert />

			<div className="sidebar__contacts">
				{user.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
