import React from "react";
import { Row, Col, Card, Typography } from "antd";
import Social from "../components/layout/Social";

const { Title } = Typography;

const Home = () => {
  const posts = Array.from({ length: 10 }).map((_, index) => ({
    caption: `Caption ${index + 1}`,
    description: `Description for post: This design will stand out more and create a visually engaging experience. ${index + 1}`,
    user_avi: "https://via.placeholder.com/50",
    user_name: `User ${index + 1}`,
    price: (index + 1) * 10,
    location: `Location ${index + 1}`,
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
          <Card bordered={false} className="criclebox cardbody h-full">
            <div className="project-ant">
              <div>
                <Title level={5}>New Posts</Title>
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
    </div>
  );
};

export default Home;
