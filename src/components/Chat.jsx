
// import React, { useEffect, useState } from 'react';
// import { Send, Paperclip, Smile, User } from 'lucide-react';
// import { io } from 'socket.io-client';
// import { useSelector } from 'react-redux';

// const socket = io("http://localhost:2000", { withCredentials: true });



// function ChatMessage({ message, timestamp, isOwn, avatar, name }) {
//     return (
//         <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
//             {!isOwn && (
//                 <div className="flex-shrink-0 mr-3">
//                     {avatar ? (
//                         <>
//                             <img
//                                 src={avatar}
//                                 alt="User avatar"
//                                 className="w-8 h-8 rounded-full object-cover"
//                             />
//                             <p>{name}</p>

//                         </>
//                     ) : (
//                         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                             <User className="w-5 h-5 text-gray-500" />
//                         </div>
//                     )}
//                 </div>
//             )}
//             <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
//                 <div
//                     className={`px-4 py-2 rounded-2xl max-w-xs lg:max-w-md ${isOwn
//                         ? 'bg-blue-500 text-white rounded-br-none'
//                         : 'bg-gray-100 text-gray-800 rounded-bl-none'
//                         }`}
//                 >
//                     <p className="text-sm">{message}</p>
//                 </div>
//                 <span className="text-xs text-gray-500 mt-1">{timestamp}</span>
//             </div>
//             {isOwn && (
//                 <div className="flex-shrink-0 ml-3">
//                     {avatar ? (
//                         <>
//                             <img
//                                 src={avatar}
//                                 alt="User avatar"
//                                 className="w-8 h-8 rounded-full object-cover"
//                             />
//                             <p>{name}</p>
//                         </>
//                     ) : (
//                         <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//                             <User className="w-5 h-5 text-blue-500" />
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// function ChatInput({ onSendMessage }) {
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (message.trim()) {
//             onSendMessage(message);
//             setMessage('');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
//             <div className="flex items-center space-x-2">
//                 <button
//                     type="button"
//                     className="p-2 text-gray-500 hover:text-gray-600 transition-colors"
//                 >
//                     <Paperclip className="w-5 h-5" />
//                 </button>
//                 <div className="flex-1">
//                     <input
//                         type="text"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         placeholder="Type a message..."
//                         className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
//                     />
//                 </div>
//                 <button
//                     type="button"
//                     className="p-2 text-gray-500 hover:text-gray-600 transition-colors"
//                 >
//                     <Smile className="w-5 h-5" />
//                 </button>
//                 <button
//                     type="submit"
//                     className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
//                     disabled={!message.trim()}
//                 >
//                     <Send className="w-5 h-5" />
//                 </button>
//             </div>
//         </form>
//     );
// }

// export function Chat({ toUser, fromUser }) {
//     const [messages, setMessages] = useState([
//         // {
//         //     id: 1,
//         //     text: "Hi there! How can I help you today?",
//         //     isOwn: false,
//         //     timestamp: "10:00 AM",
//         //     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
//         // },
//         // {
//         //     id: 2,
//         //     text: "Hey! I'm looking for information about your services.",
//         //     isOwn: true,
//         //     timestamp: "10:02 AM",
//         //     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
//         // }
//     ]);
//     const logedinUser = useSelector(store => store.user)

//     useEffect(() => {
//         socket.on('receive_message', ({ fromUser, message }) => {
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 {
//                     id: prevMessages.length + 1,
//                     text: message,
//                     name: toUser,
//                     isOwn: logedinUser !== fromUser, // Check ownership
//                     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//                     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
//                 },
//             ]);
//         });
//         if (fromUser) {
//             socket.emit('register', fromUser); // Register the logged-in user
//         }

//         socket.on('error', (error) => {
//             alert(error);
//         });

//         return () => {
//             socket.off('receive_message');
//             socket.off('error');
//         };
//     }, [logedinUser]);


//     // const socket = io()


//     const handleSendMessage = (text) => {
//         const newMessage = {
//             id: messages.length + 1,
//             name: fromUser,
//             text,
//             isOwn: logedinUser === fromUser,
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//             avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
//         };

//         setMessages([...messages, newMessage]);

//         socket.emit('send_message', { to: toUser, message: text });



//     };

//     return (
//         <div className="flex flex-col h-screen max-w-2xl mx-auto shadow-lg mb-24">
//             <div className="bg-white border-b border-gray-200 p-4">
//                 <h2 className="text-lg font-semibold">Chat</h2>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//                 {messages.map((message) => (
//                     <ChatMessage
//                         key={message.id}
//                         message={message.text}
//                         isOwn={message.isOwn}
//                         timestamp={message.timestamp}
//                         avatar={message.avatar}
//                         name={message.name}
//                     />
//                 ))}
//             </div>

//             <ChatInput onSendMessage={handleSendMessage} />
//         </div>
//     );
// }


// export default Chat