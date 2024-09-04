import React, { useState, useEffect } from "react";
import { Modal, Spin, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { ChatOutlined } from "@ant-design/icons"; // Different icon for the modal

const ChatListModal = ({ visible, onClose, user_id }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // New state for tracking initial load
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [chatId, setChatId] = useState(user_id); // Add state to manage chat ID

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Reset state whenever the modal opens
  useEffect(() => {
    if (visible) {
      setSelectedChat(null);
      setConversations([]); // Reset conversations when modal opens
      setPage(1); // Reset page to 1 when modal opens
      setChatId(user_id); // Reset chatId to the initial user_id when modal opens
      setInitialLoad(true); // Mark the first load when modal opens
    }
  }, [visible, user_id]);

  useEffect(() => {
    const fetchData = async () => {
      if (visible && userInfo) {
        try {
          const config = {
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
          if (initialLoad) setLoading(true); // Only set loading true for the initial load
          
          const response = await axios.get(`https://projectxfoundation.pythonanywhere.com/api/v1/conversations/?page=${page}`, config);

          const newConversations = response.data.results.filter(
            (newChat) => !conversations.some((existingChat) => existingChat.id === newChat.id)
          );

          setConversations((prevConversations) => [...prevConversations, ...newConversations]);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          console.error('Error fetching conversations:', error);
        } finally {
          setLoading(false);
          setInitialLoad(false); // Mark initial load as complete
        }
      }
    };

    fetchData();

    let intervalId;
    if (visible) {
      intervalId = setInterval(fetchData, 10000); // Adjusted to 10 seconds
    }

    return () => clearInterval(intervalId);
  }, [page, visible, userInfo]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setChatId(chat.id); // Set the chat ID to the selected chat's ID
  };

  const handleBack = () => {
    setSelectedChat(null);
    setChatId(user_id); // Reset chatId to the initial user_id when going back
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="chat-list-modal"
    >
      {loading && initialLoad ? ( // Show loading spinner only if it's the initial load
        <Spin size="large" />
      ) : selectedChat ? (
        <ChatWindow
          user={selectedChat.name}
          id={chatId} // Use dynamic chatId
          messages={selectedChat.messages}
          onBack={handleBack}
          userAvatar={selectedChat.avi}
        />
      ) : (
        <ChatList
          chats={conversations}
          onChatSelect={handleChatSelect}
          onLoadMore={handleLoadMore}
          totalPages={totalPages}
        />
      )}
    </Modal>
  );
};

export default ChatListModal;
