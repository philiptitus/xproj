import React, { useState } from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import ChatListModal from "./ChatListModal";

const ChatListButton = ({ user_id }) => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" icon={<MessageOutlined />} onClick={handleOpenModal}>
        Open Chat
      </Button>
      <ChatListModal visible={visible} onClose={handleCloseModal} user_id={user_id} />
    </>
  );
};

export default ChatListButton;
