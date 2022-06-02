import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";
import { useSocketContext} from "./socketContext";
import {io} from "socket.io-client";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {

	const socket = useSocketContext();
	const [arrivalMessage, setArrivalMessage] = useState(null);



	const [users, setUsers] = useState(contacts);

	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
		//	console.log(usersCopy[userIndex].id+"   envia");
			return usersCopy;

		});
	};



	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);

	//	console.log(userId+"   r1111egresa");
	};






	const setUserAsTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};
/////////////////////////////////////////////////////////
/*	const fetchMessageResponse = (data) => {
		setUsers((users) => {
			const { sender, response } = data;
console.log(data);
			let userIndex = users.findIndex((user) => user.id === userId);
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject = {
				content: response,
				sender: userId,
				time: new Date().toLocaleTimeString(),
				status: null,
			};

			usersCopy[userIndex].messages.TODAY.push(newMsgObject);


			return usersCopy;
		});
	};
	*/

	useEffect(() => {

		socket.on("getMessage", (data) => {
		//	console.log(data);
		/*	setArrivalMessage({
				sender: data.idUsu,
				content: data.message,
				createdAt: Date.now(),
			});*/
			//console.log(data)
			fetchMessageResponse(data);
			//console.log(arrivalMessage+"          holaaaaaaaaaaaaaa");

		});
	}, []);


	const fetchMessageResponse = (data) => {


		setUsers((users) => {
			console.log(users);
			const { idUsu, message } = data;

			let userIndex =idUsu-1;


//console.log(idUsu);

	//		const isLargeNumber = (element) => element.id===Number(idUsu)[0] ;
	//		console.log(users.findIndex(isLargeNumber));
			//let user = Carlos.filter((user) => user.id === Number(idUsu))[0];
		//	let userIndex = users.filter((user) => user.id === idUsu);
		//	userIndex=userIndex+idUsu;
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
//console.log(userId, message,idUsu)
		const usersCopy = [...users];
		const newMsgObject = {


			sender:idUsu,
			text: message,
			receiver:userId,

			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		const newMsgObject2 = {


			sender:null,
			text: message,
			receiver:userId,

			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		//////////

	//	console.log(newMsgObject);

		usersCopy[userIndex].messages.TODAY.push(newMsgObject2);
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
