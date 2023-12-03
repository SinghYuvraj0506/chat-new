import io from "socket.io-client"; // Add this
import { BASE_URL } from "./config";

let socket;

const connectSocket = (user_id) => {
  // socket = io("https://api.chat.codingmonk.in/", {
  //   query: `user_id=${user_id}`,
  // });
  console.log("user_id in socket.js is : ", user_id);
  socket = io(BASE_URL, {
    query: `user_id=${user_id}`,
    
  });
}; // Add this -- our server will run on port 4000, so we connect to it from here

export { socket, connectSocket };
