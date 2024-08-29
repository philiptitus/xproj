import React from "react";
import { List, Avatar } from "antd";

const ChatList = ({ chats, onChatSelect }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={chats}
      renderItem={(item) => (
        <List.Item onClick={() => onChatSelect(item)} className="chat-list-item">
          <List.Item.Meta
            avatar={<Avatar src={item.userAvatar} />}
            title={item.user}
            description={item.lastMessage}
          />
        </List.Item>
      )}
      style={{ maxHeight: "300px", overflowY: "scroll" }}
    />
  );
};

export default ChatList;
