import { Row, Col, Card, Dropdown, Space } from 'antd';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import './index.css';

const Test = () => {
  return (
    <div>
      <Row>
        <Col className="box" xs={24} sm={12} md={8}></Col>
        <Col className="box" xs={24} sm={12} md={16}></Col>
      </Row>
    </div>
  );
};

export default Test;
