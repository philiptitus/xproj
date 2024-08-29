import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./NewPostModal.css"; // Assuming you have a CSS file for styling

const NewPostModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    form.resetFields(); // Reset the form when modal is closed
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Post Created:", values);
        // Handle post submission, e.g., send values to your server
        handleCloseModal();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleOutlined />}
        size="large"
        onClick={handleOpenModal}
        className="new-post-button"
      />
      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        className="new-post-modal"
      >
        <div className="modal-header">
          <h2>Create New Post</h2>
        </div>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="caption"
            label="Caption"
            rules={[{ required: true, message: "Please input the caption!" }]}
          >
            <Input placeholder="Enter your caption" maxLength={50} />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please input the description!" }]}
          >
            <Input.TextArea
              placeholder="Enter the description"
              maxLength={264}
              rows={4}
            />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please input the price!" },
              { type: "number", min: 0, message: "Price cannot be negative" },
            ]}
          >
            <Input type="number" placeholder="Enter the price" step="0.01" />
          </Form.Item>

          <Form.Item name="location" label="Location">
            <Input placeholder="Enter the location" maxLength={100} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="submit-button">
              Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewPostModal;
