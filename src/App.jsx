import { useEffect } from "react";

import "./App.css";
import { socket } from "./socket.js";
import chatSocket from "./chatSocket.js";

function App() {
  useEffect(() => {
    // socket.on('offersAvailable',(data)=>{
    //   console.log(data);
    // })
    socket.on("offer", (message) => {
      console.log(message);
    });
  });

  return (
    <>
      <div>
        <button
          onClick={() => {
            socket.emit("joinRoom", "madina", (confirmation) => {
              console.log(confirmation);
            });
          }}
        >
          JoinRoom
        </button>

        <button
          onClick={() => {
            socket.emit("offer", {
              room: "madina",
              message: "We have a Offer",
            });
          }}
        >
          Send Message
        </button>
      </div>
    </>
  );
}

export default App;
