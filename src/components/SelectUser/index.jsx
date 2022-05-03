import React from "react";
import "./styles/main.css";
import avatar from "assets/images/profile-picture-girl-1.jpeg";
import Alert from "./Alert";
import Contact from "./Contact";
import OptionsBtn from "components/OptionsButton";
import { useUsersContext } from "context/usersContext";

const Sidebar = () => {
	const { users: contacts } = useUsersContext();
	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">

					<img src={avatar} alt="Karen Okonkwo" className="avatar" />
				</div>
				<div className="sidebar__actions">


					<OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/>
				</div>
			</header>
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
