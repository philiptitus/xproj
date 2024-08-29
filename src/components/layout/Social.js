import React, { useState } from "react";
import { Card, Avatar, Typography, Button, Badge, Modal } from "antd";
import { MessageOutlined, DeleteOutlined } from "@ant-design/icons";
import ChatModal from "./ChatModal"; // Import the ChatModal component

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const fakeMessages = [
  { sender: "John Doe", content: "Hey there!", timestamp: "10:30 AM" },
  { sender: "You", content: "Hello! How can I help you?", timestamp: "10:32 AM" },
  { sender: "John Doe", content: "I need more information about the product.", timestamp: "10:35 AM" },
];

const Social = ({ post, onDelete }) => {
  const [isChatModalVisible, setIsChatModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showChatModal = () => {
    setIsChatModalVisible(true);
  };

  const closeChatModal = () => {
    setIsChatModalVisible(false);
  };

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    onDelete(post.id); // Assuming post has an id property
    closeDeleteModal();
  };

  return (
    <>
      <Card
        hoverable
        style={{
          width: 350,
          margin: "24px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          position: "relative",
        }}
        actions={[
          <Button icon={<MessageOutlined />} key="comment" onClick={showChatModal}>
            Message Author
          </Button>,
        ]}
      >
        <DeleteOutlined
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            fontSize: "20px",
            color: "#ff4d4f",
            cursor: "pointer",
          }}
          onClick={showDeleteModal}
        />
        <Meta
          avatar={
            <Badge dot offset={[5, 0]} color="green">
              <Avatar src={post.user_avi} size={48} />
            </Badge>
          }
          title={
            <Title level={4} style={{ marginBottom: 0 }}>
              {post.user_name}
            </Title>
          }
          description={
            <>
              <Paragraph ellipsis={{ rows: 2, expandable: false }} style={{ fontWeight: "bold" }}>
                {post.caption}
              </Paragraph>
              <Paragraph ellipsis={{ rows: 3, expandable: true }} style={{ color: "#595959" }}>
                {post.description}
              </Paragraph>
              <Paragraph>
                <strong>Price:</strong> <span style={{ color: "#52c41a" }}>${post.price}</span>
              </Paragraph>
              {post.location && (
                <Paragraph>
                  <strong>Location:</strong> {post.location}
                </Paragraph>
              )}
              <Paragraph style={{ color: "#8c8c8c", fontSize: "12px" }}>
                Posted on {new Date(post.created_date).toLocaleString()}
              </Paragraph>
            </>
          }
        />
      </Card>

      <ChatModal
        visible={isChatModalVisible}
        onClose={closeChatModal}
        initialUser={{ user: post.user_name, userAvatar: post.user_avi, messages: fakeMessages }}
      />

      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDelete}
        onCancel={closeDeleteModal}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this post?</p>
      </Modal>
    </>
  );
};

export default Social;
