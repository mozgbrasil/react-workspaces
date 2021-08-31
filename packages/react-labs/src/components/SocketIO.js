import React, { useEffect } from "react";
import io from "socket.io-client";

let socket;

const SocketIO = () => {
  //https://github.com/martinivanalfonso/RealTimeChatApp/blob/53181b44f8ccc7a1e21ccae5ec1884a3273e2669/src/components/chat/chat.component.jsx
  const END_POINT = "http://localhost:8081/";
  //   const END_POINT = "https://limitless-peak-33910.herokuapp.com/";

  useEffect(() => {
    //

    socket = io(END_POINT);

    console.log("io: ", Object.getOwnPropertyNames(io).sort());
    console.log("socket: ", socket);

    socket.on("connect", () => {
      console.log("socket.on(connect: ");
      socket.emit("hi!");
    });
    socket.on("event", (data) => {
      console.log("socket.on(event: ", data);
    });
    socket.on("disconnect", () => {
      console.log("socket.on(disconnect: ");
    });

    // socket.on("message", msg => {
    //   console.log("message: ", msg);
    // });
    // socket.onmessage = msg => {
    //   console.log("onmessage: ", msg);
    // };
    // socket.on("on-socketio-chat", msg => {
    //   console.log("on-socketio-chat / front: ", msg);
    // });

    // socket.on("FromAPI", msg => {
    //   console.log("FromAPI: ", msg);
    // });

    // return () => {
    //   socket.disconnect();
    // };
  });

  return <div className='socket-io-container'></div>;
};

export default SocketIO;
