import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";
import { useSocketContext} from "./socketContext";
import {io} from "socket.io-client";

const UsersContext = createContext();
const useUsersContext = () => useContext(UsersContext);
const UsersProvider = ({ children }) => {
	const socket = useSocketContext();
	const [users, setUsers] = useState(contacts);
	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;

		});
	};

	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const setUserAsTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};

	useEffect(() => {

		socket.on("getMessage", (data) => {
			fetchMessageResponse(data);
		});
	}, []);

	const fetchMessageResponse = (data) => {

		setUsers((users) => {
			console.log(users);
			const { idUsu, message } = data;
			let userIndex =idUsu-1;
			const usersCopy = JSON.parse(JSON.stringify(users));

console.log(userIndex);

			const newMsgObject = {
				content: message,
				sender: idUsu,
				time: new Date().toLocaleTimeString(),
				status: null,
			};

			usersCopy[userIndex].messages.TODAY.push(newMsgObject);
			console.log(newMsgObject);
			return usersCopy;
		});
	};

	const addNewMessage = (userId, message,idUsu) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			sender:null,
			content: message,
			receiver:userId,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};
	
		usersCopy[userIndex].messages.TODAY.push(newMsgObject);
		setUsers(usersCopy);
		socket.emit("sendMessage", {userId,message,idUsu});
	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
