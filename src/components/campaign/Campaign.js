import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Col } from 'react-bootstrap';

const Campaign = ({ id, title, createdAt, status }) => (
  <Col sm={12} md={6} lg={4}>
    <Card className="m-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Trạng thái: {status}</Card.Text>
        <Card.Text>Ngày tạo: {createdAt}</Card.Text>
        <Button variant="primary" href={`/campaigns/${id}`}>Vào ngay!</Button>
      </Card.Body>
    </Card>
  </Col>
);

Campaign.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
};

export default Campaign;
