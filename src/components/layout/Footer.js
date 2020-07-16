import React from 'react';
import { Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Row style={{ bottom: 0, right: 0, left: 0 }} className="bg-dark text-white position-absolute">
      <span className="mx-auto p-2">Update Haravan Tag</span>
    </Row>
  );
};

export default Footer;
