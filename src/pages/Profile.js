import React, { useState } from "react";
import { Row, Col, Card, Typography, Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Social from "../components/layout/Social";
import "./styling/Profile.css"; // Assuming you have a CSS file for styling

const { Title, Text } = Typography;

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted");
    // Handle account deletion logic here
    handleCloseModal();
  };

  const user = {
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    joinDate: "Joined on January 1, 2020",
  };

  const posts = Array.from({ length: 5 }).map((_, index) => ({
    caption: `Caption ${index + 1}`,
    description: `Description for post: This is one of your posts. ${index + 1}`,
    user_avi: user.avatar,
    user_name: user.name,
    price: (index + 1) * 20,
    location: user.location,
    created_date: new Date(),
  }));

  return (
    <div className="layout-content">
      <Row
        gutter={[24, 0]}
        style={{
          display: "flex",
          justifyContent: "center", // Centers the entire column horizontally
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={16}
          xl={20}
          className="mb-24"
          style={{
            margin: "0 auto", // Ensures the column is centered within the row
            maxWidth: "100%", // Ensures the column doesn't exceed the row width
          }}
        >
          <Card bordered={false} className="circlebox cardbody h-full profile-card">
            <div className="profile-header">
              <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
              <div className="profile-details">
                <Title level={3} className="profile-name">{user.name}</Title>
                <Text className="profile-email">{user.email}</Text>
                <Text className="profile-location">{user.location}</Text>
                <Text className="profile-join-date">{user.joinDate}</Text>
              </div>
            </div>
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              block
              className="delete-account-button"
              onClick={handleOpenModal}
            >
              Delete Account
            </Button>
          </Card>
        </Col>
      </Row>

      <Row
        gutter={[24, 0]}
        style={{
          display: "flex",
          justifyContent: "center", // Centers the entire column horizontally
        }}
        className="your-posts-section"
      >
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={16}
          xl={20}
          className="mb-24"
          style={{
            margin: "0 auto", // Ensures the column is centered within the row
            maxWidth: "100%", // Ensures the column doesn't exceed the row width
          }}
        >
          <Card bordered={false} className="circlebox cardbody h-full">
            <div className="project-ant">
              <div>
                <Title level={5}>Your Posts</Title>
              </div>
            </div>
            <div
              className="ant-list-box table-responsive social-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centers the Social component list within the card
              }}
            >
              {posts.map((post, index) => (
                <Social key={index} post={post} />
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleDeleteAccount}
        okText="Yes, Delete"
        cancelText="Cancel"
        className="delete-modal"
      >
        <div className="modal-content">
          <Title level={4} className="modal-title">
            Are you sure you want to delete your account?
          </Title>
          <Text className="modal-description">
            This action cannot be undone. All your data will be permanently deleted.
          </Text>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
