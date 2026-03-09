import { io } from "socket.io-client";

const chatSocket = io("http://localhost:3000/chat");

export default chatSocket;
