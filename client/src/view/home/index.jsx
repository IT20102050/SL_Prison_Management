import React from "react";
import { Card, Button, Row, Col } from "antd";

const Home = () => {
  return (
    <div>
      <Row style={{ paddingLeft: 250, marginTop: 50 }}>
        <Col span={10}>
          <Profile />
        </Col>
        <Col span={10}>
          <Jail />
        </Col>
        <Col span={10}>
          <Staff />
        </Col>
        <Col span={10}>
          <Inventory />
        </Col>
      </Row>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <Card
        title="Prisoners' Profile Management"
        style={{ width: 500, height: 300, textAlign: "center", paddingTop: 30 }}
      >
        <Button
          type="primary"
          size="large"
          htmlType="button"
          href={`/profilelogin`}
          style={{ borderRadius: 30, marginTop: 50, width: 100 }}
        >
          Login
        </Button>
      </Card>
    </div>
  );
};

const Jail = () => {
  return (
    <div>
      <Card
        title="Jail Management"
        style={{ width: 500, height: 300, textAlign: "center", paddingTop: 30 }}
      >
        <Button
          type="primary"
          size="large"
          htmlType="button"
          href={`/jaillogin`}
          style={{ borderRadius: 30, marginTop: 50, width: 100 }}
        >
          Login
        </Button>
      </Card>
    </div>
  );
};

const Staff = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Card
        title="Staff Management"
        style={{ width: 500, height: 300, textAlign: "center", paddingTop: 30 }}
      >
        <Button
          type="primary"
          size="large"
          htmlType="button"
          href={`/stafflogin`}
          style={{ borderRadius: 30, marginTop: 50, width: 100 }}
        >
          Login
        </Button>
      </Card>
    </div>
  );
};

const Inventory = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Card
        title="Inventory Management"
        style={{
          width: 500,
          height: 300,
          textAlign: "center",
          paddingTop: 30,
          fontSize: "20px",
        }}
      >
        <Button
          type="primary"
          size="large"
          htmlType="button"
          href={`/inventorylogin`}
          style={{ borderRadius: 30, marginTop: 50, width: 100 }}
        >
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Home;
