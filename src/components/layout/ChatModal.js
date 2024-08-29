import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./ChatModal.css"; // Assuming you have a CSS file for the ChatModal component

const ChatModal = ({ visible, onClose, initialUser }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showChatList, setShowChatList] = useState(false);

  const chats = Array.from({ length: 10 }).map((_, index) => ({
    user: `User ${index + 1}`,
    userAvatar: `https://via.placeholder.com/50?text=${index + 1}`,
    lastMessage: `Last message from User ${index + 1}`,
    messages: [
      { sender: `User ${index + 1}`, content: `Message 1 from User ${index + 1}`, timestamp: "10:00 AM" },
      { sender: "You", content: `Message 2 from You`, timestamp: "10:05 AM" },
    ],
  }));

  useEffect(() => {
    if (initialUser) {
      setSelectedChat(initialUser);
    } else {
      setShowChatList(true);
    }
  }, [initialUser]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setShowChatList(false);
  };

  const handleBack = () => {
    setShowChatList(true);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="chat-modal"
    >
      {showChatList ? (
        <ChatList chats={chats} onChatSelect={handleChatSelect} />
      ) : (
        selectedChat && (
          <ChatWindow
            user={selectedChat.user}
            messages={selectedChat.messages}
            onBack={handleBack}
            userAvatar={selectedChat.userAvatar}
          />
        )
      )}
    </Modal>
  );
};

export default ChatModal;
