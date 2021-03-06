import React from "react";


const Header = ({ user, openProfileSidebar, openSearchSidebar }) => {
	return (
		<header className="header chat__header">
			<div className="chat__avatar-wrapper" onClick={openProfileSidebar}>
				<img src={user.profile_picture}  className="avatar" />
			</div>

			<div className="chat__contact-wrapper" onClick={openProfileSidebar}>
				<h2 className="chat__contact-name"> {user?.name}</h2>
				<p className="chat__contact-desc">
					{user.typing ? "typing..." : "online"}
				</p>
			</div>

		</header>
	);
};

export default Header;
