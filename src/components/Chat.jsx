import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'

const Chat = () => {
    const { targetUserId } = useParams()
    const user = useSelector((store) => store.user)
    const userId = user?._id

    const [messages, setMessages] = useState([
    ]);
    // const [timeStamp, setTimeStamp] = useState()
    const [lastSeen, setLastSeen] = useState()


    const fetchChatMesaages = async () => {
        const chat = await axios.get(BASE_URL + "chat/" + targetUserId,
            { withCredentials: true, })
        // console.log(chat)


        const chatMessages = chat?.data?.messages.map((msg) => {
            return {
                firstName: msg.senderId.firstName,
                lastName: msg.senderId.lastName,

                text: msg.text,
                time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        });
        setMessages(chatMessages)

        setLastSeen(chat?.data?.messages[chat.data.messages.length - 1]?.updatedAt)
    }

    function timeAgo(lastSeen) {
        const now = new Date();
        const diffInMs = now - new Date(lastSeen); // Time difference in milliseconds
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert to hours

        if (diffInHours === 0) {
            return 'Last seen just now';
        } else {
            return `Last seen ${diffInHours} hours ago`;
        }
    }

    //   const lastSeen = '2025-03-03T08:30:00Z'; // Replace with the actual time of last seen

    // console.log(lastSeen)

    useEffect(() => {
        fetchChatMesaages()

    }, [])

    useEffect(() => {
        if (!userId) return;
        const socket = createSocketConnection()
        socket.emit("joinChat", { firstName: user.firstName, lastName: user.lastName, userId, targetUserId });

        socket.on("messageRecieved", ({ firstName, lastName, text }) => {

            setMessages((messages) => [...messages, { firstName, lastName, text }])
        })

        return () => {
            socket.disconnect()
        }
    }, [userId, targetUserId])
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        const socket = createSocketConnection()
        socket.emit("sendMessage", {
            firstName: user.firstName,
            lastName: user.lastName,
            userId,
            targetUserId,
            text: newMessage
        })

        setNewMessage("")
        // if (newMessage.trim()) {
        //     setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'me' }]);
        //     setNewMessage('');
        // }
    };
    return (
        <div className="flex flex-col sm:h-[80vh] h-[100vh] bg-gray-100 sm:mt-10  sm:w-[40rem] m-auto">
            {/* Chat Header */}
            <div className="bg-white shadow px-4 py-3">
                <h1 className="text-xl font-semibold">Chat {<span className=' text-xs' >({timeAgo(lastSeen)})</span>}</h1>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (

                    <div key={index}>
                        <div className={"chat " + (user.firstName === message.firstName ? "chat-end" : "chat-start")}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS chat bubble component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="chat-header">
                                {message.firstName} {message.lastName}
                                <time className="text-xs opacity-50"> {message.time}</time>
                            </div>
                            <div className="chat-bubble">{message.text}</div>
                            <div className="chat-footer opacity-50">Delivered</div>
                        </div>


                    </div>
                ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="bg-white border-t p-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-full px-6 py-2 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Chat