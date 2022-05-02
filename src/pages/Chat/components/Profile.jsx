import React from "react";
import groupAvatar from "assets/images/bicho.webp";
import media from "assets/images/bicho.webp";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";


const Profile = ({ user }) => {
	return (
		<div className="profile">
			<div className="profile__section profile__section--personal">
				<div className="profile__avatar-wrapper">
					<img src={user.profile_picture}  className="avatar" />

				</div>
				<h2 className="profile__name"> {user.name} </h2>
				<h2 className="profile__name"> {user.phone_number} </h2>
			</div>
			<div className="profile__section profile__section--about">
				<div className="sb profile__heading-wrapper">
					<h2 className="profile__heading"> About the student or user </h2>
				</div>
				<ul>
					<li className="profile__about-item"> Name:{user.name} </li>
					<li className="profile__about-item"> Phone:{user.phone_number} </li>
					<li className="profile__about-item">University:  {user.university}</li>
					<li className="profile__about-item">Career:{user.career}</li>
					<li className="profile__about-item">Section:{user.section}</li>
					<li className="profile__about-item">License:{user.license}</li>
					<li className="profile__about-item"></li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
