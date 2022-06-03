import { createContext, useContext } from "react";
import io from "socket.io-client";

const SOCKET_URL = window.location.origin.includes("localhost")
	? "ws://localhost:5000"
:"https://whatsapp-web-clone-backend.com/";
const socket = io.connect(SOCKET_URL);

const SocketContext = createContext();

const useSocketContext = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export { useSocketContext, SocketProvider };
