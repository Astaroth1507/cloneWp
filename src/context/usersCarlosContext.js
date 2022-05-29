import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";
import { useSocketContext } from "./socketContext";

const UsersContext = createContext();

const useUsersCContext = () => useContext(UsersContext);

const UsersCProvider = ({ children }) => {








	const [Carlos, setCarlos] = useState(contacts);

	const _updateUserCarlosProp = (userId, prop, value) => {
		setCarlos((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			//console.log(usersCopy[userIndex].id+"   envia");
			return usersCopy;
		});
	};



	const setUserCarlosAsUnread = (userId) => {
		_updateUserCarlosProp(userId, "unread", 0);
	//	console.log(userId)
	};





	return (
		<UsersContext.Provider value={{ Carlos,setUserCarlosAsUnread}}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersCContext, UsersCProvider };
