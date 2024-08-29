import React, { useState } from "react";
import { Input, Button, List, Avatar } from "antd";
import { SendOutlined, LeftOutlined } from "@ant-design/icons";

const ChatWindow = ({ user, messages, onBack, userAvatar }) => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newChatMessage = {
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div className="chat-header">
        <LeftOutlined onClick={onBack} className="back-icon" />
        <Avatar src={userAvatar} />
        <span className="chat-user-name">{user}</span>
      </div>
      <div className="chat-container">
        <List
          itemLayout="horizontal"
          dataSource={chatMessages}
          renderItem={(item) => (
            <List.Item className={item.sender === "You" ? "message-right" : "message-left"}>
              <List.Item.Meta
                avatar={<Avatar>{item.sender.charAt(0)}</Avatar>}
                title={item.sender}
                description={
                  <div className="message-content">
                    <p>{item.content}</p>
                    <span className="timestamp">{item.timestamp}</span>
                  </div>
                }
              />
            </List.Item>
          )}
          style={{ maxHeight: "300px", overflowY: "scroll", marginBottom: "16px" }}
        />
      </div>
      <div className="chat-input-container">
        <Input.TextArea
          rows={2}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your message..."
          className="chat-input"
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
          className="send-button"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
