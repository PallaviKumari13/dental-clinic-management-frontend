import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const socket = io('http://localhost:3000', { transports: ['websocket'] });
  
  useEffect(() => {
    socket.on('joined', () => {
      setIsJoined(true);
    });
    socket.on("message",(msg)=>{
        setMessages((prev)=>[...prev,,msg])
    })

    return () => {
      socket.off('joined');
    };

  }, [room]);

  const send = () => {
    socket.emit('message', { message, room });
  };

  const join = () => {
    socket.emit('join', room);
  };

  return (
    <div>
      {!isJoined ? (
        <div>
          <input
            className='text-slate-950'
            value={room}
            type='text'
            placeholder='Enter Room Id'
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className='text-fuchsia-950' onClick={join}>
            Join
          </button>
        </div>
      ) : (
        <div>
            {
                messages.map((mess,index)=> {
                    return(
                        <p key={index}>
                            {mess}
                        </p>
                    )
                })
            }
          <input
            className='text-slate-950'
            value={message}
            type='text'
            placeholder='Enter message'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='text-fuchsia-950' onClick={send}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
