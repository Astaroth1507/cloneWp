import React from "react";

import { Link } from "react-router-dom";
import { useUsersCContext } from "context/usersCarlosContext";

const SelectU = ({ contact }) => {
	const { setUserCarlosAsUnread } = useUsersCContext();

	return (
		<Link
			className="sidebar-contact"
			to={`/usuario/${contact.id}`}
			onClick={() => setUserCarlosAsUnread(contact.id)}
		>

			<div className="sidebar-contact__avatar-wrapper">
				<img
					src={contact.profile_picture}
					alt={contact.profile_picture}
					className="avatar"
				/>
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {contact.name} </h2>

				</div>

			</div>
		</Link>

	);

};

export default SelectU;
