import { useEffect } from "react";

import "./App.css";
import chatSocket from "./chatSocket.js";

function App() {
  useEffect(() => {
    chatSocket.connect();

    chatSocket.on("connected", (data) => {
      console.log(data);
    });

    return () => {
      chatSocket.off("connected");
      chatSocket.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <h1>Socket React Practice</h1>
        <br />
        <br />
        <button
          onClick={() => {
            chatSocket.emit("chat", "Hello Bro");
          }}
        >
          Chat Send
        </button>
      </div>
    </>
  );
}

export default App;
