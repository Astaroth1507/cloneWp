import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";
import {useSocketContext} from "./socketContext";
import {useParams} from "react-router-dom";

const UsersContext = createContext();

const useUsersCContext = () => useContext(UsersContext);

const UsersCProvider = ({ children }) => {

	const socket = useSocketContext();

	//const {idUsu} = useParams();
	const [onlineUsers, setOnlineUsers] = useState([]);




	const [Carlos, setCarlos] = useState(contacts);




	const agregarUsuario = (idUsu) => {

		socket.emit("addUser", idUsu);


	};

	/*useEffect(() => {

		socket.emit("addUser", agregarUsuario);
		socket.on("getUsers", (users) => {
			console.log(users)

			///////////////////////////
			setOnlineUsers(users
			);
		});
	}, [socket]);*/






	return (
		<UsersContext.Provider value={{ Carlos, agregarUsuario}}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersCContext, UsersCProvider };
