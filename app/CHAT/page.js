"use client"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"

const socket = io("https://only-the-server-imagic.herokuapp.com/")

export default function Home(){

  const [myInputValue, setMyInputValue] = useState("");
  
  useEffect(()=>{
    socket.on("text-message", (data) => {  
      document.getElementById("innerChatBox").innerHTML = document.getElementById("innerChatBox").innerHTML + "<span id='notmine'><span id='innertext'>"+data+"</span></span>";
      document.querySelector('#myChatData').scrollTo(0, document.querySelector('#myChatData').scrollHeight);
    })
  }, [socket])

  socket.on("connect", () => {  
    socket.emit('custom-event', 10, "Stirng", {data: "yolo"})
  })
  

  function changeTheVal(e){
    setMyInputValue(e.target.value)

  }

  function sendTheMsg(){
    
    document.getElementById("innerChatBox").innerHTML = document.getElementById("innerChatBox").innerHTML + "<span id='mine'><span id='innertext'>"+myInputValue+"</span></span>"
    socket.emit('my-message', myInputValue)
    document.querySelector('#myChatData').scrollTo(0, document.querySelector('#myChatData').scrollHeight);
    setMyInputValue("")
  }

  function setMyChatData(data){
    document.getElementById("myChatData").innerHTML = data;
  }

  return (
    <main>
      <div id="myChatData">
        <div id="innerChatBox"></div>
      </div>
      <div id="inputCon">
        <input type="text" value={myInputValue} onChange={changeTheVal}/>
        <button onClick={sendTheMsg}>Send</button>
      </div>
    </main>
  )
}
